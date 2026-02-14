"use client";

import { useState } from "react";
import {
  FiUser,
  FiShield,
  FiPlus,
  FiCheck,
  FiX,
  FiUsers,
  FiMail,
  FiLock,
  FiRefreshCw,
  FiPower
} from "react-icons/fi";

type AdminUser = {
  id: string;
  username: string | null;
  role: "SUPER_ADMIN" | "EDITOR";
  isActive: boolean;
  name: string | null;
  email: string | null;
};

type UsersEditorProps = {
  initialUsers: AdminUser[];
};

export function UsersEditor({ initialUsers }: UsersEditorProps) {
  const [users, setUsers] = useState(initialUsers);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    role: "EDITOR" as "SUPER_ADMIN" | "EDITOR",
    name: "",
    email: "",
  });

  const refreshUsers = async () => {
    const response = await fetch("/api/admin/users");
    if (!response.ok) return;
    const payload = (await response.json()) as { users: AdminUser[] };
    setUsers(payload.users);
  };

  const createUser = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setMessage(payload.error ?? "Kullanici olusturulamadi.");
        return;
      }
      setNewUser({ username: "", password: "", role: "EDITOR", name: "", email: "" });
      await refreshUsers();
      setMessage("Kullanici olusturuldu.");
    } catch {
      setMessage("Sistem hatasi olustu.");
    } finally {
      setSaving(false);
    }
  };

  const patchUser = async (id: string, data: Record<string, unknown>) => {
    setSaving(true);
    setMessage(null);
    try {
      const response = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...data }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setMessage(payload.error ?? "Guncelleme basarisiz.");
        return;
      }
      await refreshUsers();
      setMessage("Kullanici guncellendi.");
    } catch {
      setMessage("Sistem hatasi olustu.");
    } finally {
      setSaving(false);
    }
  };

  const patchRole = async (id: string, role: "SUPER_ADMIN" | "EDITOR") => {
    setSaving(true);
    setMessage(null);
    try {
      const response = await fetch(`/api/admin/users/${id}/role`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        setMessage(payload.error ?? "Rol guncellemesi basarisiz.");
        return;
      }
      await refreshUsers();
      setMessage("Rol guncellendi.");
    } catch {
      setMessage("Sistem hatasi olustu.");
    } finally {
      setSaving(false);
    }
  };

  const messageTone =
    message &&
    (message.toLowerCase().includes("basarisiz") ||
      message.toLowerCase().includes("hata") ||
      message.toLowerCase().includes("olusturulamadi"))
      ? "text-rose-600"
      : "text-emerald-600";

  return (
    <div className="space-y-6 pb-20">
      {/* ── Action Header ── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm sticky top-4 z-10">
        <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-gray-50 text-gray-500">
                <FiUsers size={20} />
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-900">
                    Kullanici Yonetimi
                </h2>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                    {users.length} Kullanici
                </div>
            </div>
        </div>
        
        <div className="flex items-center gap-3">
            {message && (
                <span className={`text-sm font-medium ${messageTone} flex items-center gap-1`}>
                   {messageTone.includes("emerald") && <FiCheck />} {message}
                </span>
            )}
             <button
                onClick={refreshUsers}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
                <FiRefreshCw /> Yenile
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ── Left Column: User List ── */}
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 text-gray-900 font-semibold">
                    <FiUsers className="text-gray-400" /> Mevcut Kullanicilar
                </div>
                <div className="p-6 grid gap-4">
                    {users.map((user) => (
                        <div key={user.id} className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl border ${user.isActive ? 'border-gray-200 bg-white' : 'border-gray-100 bg-gray-50 opacity-75'}`}>
                             <div className="flex items-start gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${user.role === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'}`}>
                                    {user.username?.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                                        {user.username}
                                        {user.role === 'SUPER_ADMIN' && <span className="text-[10px] bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded border border-purple-200">SUPER</span>}
                                        {!user.isActive && <span className="text-[10px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded">PASIF</span>}
                                    </h4>
                                    <div className="text-xs text-gray-500 flex flex-col sm:flex-row gap-1 sm:gap-3">
                                         {user.email && <span className="flex items-center gap-1"><FiMail size={10}/> {user.email}</span>}
                                         {user.name && <span className="flex items-center gap-1"><FiUser size={10}/> {user.name}</span>}
                                    </div>
                                </div>
                             </div>

                             <div className="flex items-center gap-2 self-end md:self-center">
                                <select
                                    className="text-xs rounded-lg border border-gray-200 px-2 py-1.5 bg-gray-50 text-gray-600 focus:outline-none focus:border-blue-500"
                                    value={user.role}
                                    onChange={(event) => patchRole(user.id, event.target.value as "SUPER_ADMIN" | "EDITOR")}
                                >
                                    <option value="EDITOR">EDITOR</option>
                                    <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                                </select>
                                
                                <button
                                    onClick={() => {
                                        const nextPassword = window.prompt(`${user.username} icin yeni sifre`);
                                        if (!nextPassword) return;
                                        void patchUser(user.id, { password: nextPassword });
                                    }}
                                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                    title="Sifre Sifirla"
                                >
                                    <FiLock size={16} />
                                </button>
                                
                                <button
                                    onClick={() => patchUser(user.id, { isActive: !user.isActive })}
                                    className={`p-2 rounded-lg transition-colors ${user.isActive ? 'text-gray-400 hover:text-rose-600 hover:bg-rose-50' : 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100'}`}
                                    title={user.isActive ? "Pasiflestir" : "Aktiflestir"}
                                >
                                    {user.isActive ? <FiPower size={16} /> : <FiCheck size={16} />}
                                </button>
                             </div>
                        </div>
                    ))}
                    {users.length === 0 && <p className="text-center text-gray-400 italic py-4">Henuz kullanici bulunmuyor.</p>}
                </div>
            </div>
        </div>

        {/* ── Right Column: New User ── */}
        <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden sticky top-24">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 text-gray-900 font-semibold">
                    <FiPlus className="text-gray-400" /> Yeni Kullanici
                </div>
                <div className="p-6 space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Kullanici Adi *</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="kullaniciadi"
                            value={newUser.username}
                            onChange={(event) => setNewUser((prev) => ({ ...prev, username: event.target.value }))}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Sifre *</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Gecici sifre"
                            type="password"
                            value={newUser.password}
                            onChange={(event) => setNewUser((prev) => ({ ...prev, password: event.target.value }))}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Ad Soyad</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Opsiyonel"
                            value={newUser.name}
                            onChange={(event) => setNewUser((prev) => ({ ...prev, name: event.target.value }))}
                        />
                    </div>
                     <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">E-posta</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Opsiyonel"
                            value={newUser.email}
                            onChange={(event) => setNewUser((prev) => ({ ...prev, email: event.target.value }))}
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase">Rol</label>
                         <select
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                            value={newUser.role}
                            onChange={(event) =>
                                setNewUser((prev) => ({ ...prev, role: event.target.value as "SUPER_ADMIN" | "EDITOR" }))
                            }
                            >
                            <option value="EDITOR">EDITOR</option>
                            <option value="SUPER_ADMIN">SUPER_ADMIN</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        onClick={createUser}
                        disabled={saving || !newUser.username || !newUser.password}
                        className="w-full mt-2 flex justify-center items-center gap-2 px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                    >
                        {saving ? "Kaydediliyor..." : "Kullanici Olustur"}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
