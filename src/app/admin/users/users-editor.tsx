"use client";

import { useState } from "react";

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
      ? "admin-message-error"
      : "admin-message-success";

  return (
    <div className="admin-editor space-y-6">
      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Yeni Kullanici</h2>
        <p className="admin-section-copy">Yeni admin hesabi olusturun ve rol atayin.</p>
        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="admin-field-label">Kullanici Adi</span>
            <input
              className="admin-field"
              placeholder="kullaniciadi"
              value={newUser.username}
              onChange={(event) => setNewUser((prev) => ({ ...prev, username: event.target.value }))}
            />
          </label>
          <label>
            <span className="admin-field-label">Sifre</span>
            <input
              className="admin-field"
              placeholder="Gecici sifre"
              type="password"
              value={newUser.password}
              onChange={(event) => setNewUser((prev) => ({ ...prev, password: event.target.value }))}
            />
          </label>
          <label>
            <span className="admin-field-label">Ad Soyad</span>
            <input
              className="admin-field"
              placeholder="Opsiyonel"
              value={newUser.name}
              onChange={(event) => setNewUser((prev) => ({ ...prev, name: event.target.value }))}
            />
          </label>
          <label>
            <span className="admin-field-label">E-posta</span>
            <input
              className="admin-field"
              placeholder="Opsiyonel"
              value={newUser.email}
              onChange={(event) => setNewUser((prev) => ({ ...prev, email: event.target.value }))}
            />
          </label>
          <label>
            <span className="admin-field-label">Rol</span>
            <select
              className="admin-field"
              value={newUser.role}
              onChange={(event) =>
                setNewUser((prev) => ({ ...prev, role: event.target.value as "SUPER_ADMIN" | "EDITOR" }))
              }
            >
              <option value="EDITOR">EDITOR</option>
              <option value="SUPER_ADMIN">SUPER_ADMIN</option>
            </select>
          </label>
        </div>
        <button
          type="button"
          onClick={createUser}
          disabled={saving}
          className="admin-btn admin-btn-primary mt-2 disabled:opacity-60"
        >
          {saving ? "Kaydediliyor..." : "Kullanici Olustur"}
        </button>
      </section>

      <section className="space-y-4 p-5 md:p-6">
        <h2 className="admin-section-title">Mevcut Kullanicilar</h2>
        <p className="admin-section-copy">Rol, aktiflik ve sifre islemlerini buradan yonetin.</p>
        <div className="space-y-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="admin-repeater grid gap-3 md:grid-cols-[1fr_auto_auto_auto] md:items-center"
            >
              <div>
                <p className="text-sm font-semibold text-[color:var(--text)]">{user.username ?? "-"}</p>
                <p className="text-xs text-[color:var(--text-muted)]">{user.email ?? "E-posta yok"}</p>
              </div>
              <select
                className="admin-field"
                value={user.role}
                onChange={(event) => patchRole(user.id, event.target.value as "SUPER_ADMIN" | "EDITOR")}
              >
                <option value="EDITOR">EDITOR</option>
                <option value="SUPER_ADMIN">SUPER_ADMIN</option>
              </select>
              <button
                type="button"
                onClick={() => patchUser(user.id, { isActive: !user.isActive })}
                className={`admin-btn ${user.isActive ? "admin-btn-danger" : "admin-btn-primary"}`}
              >
                {user.isActive ? "Pasiflestir" : "Aktiflestir"}
              </button>
              <button
                type="button"
                onClick={() => {
                  const nextPassword = window.prompt(`${user.username} icin yeni sifre`);
                  if (!nextPassword) return;
                  void patchUser(user.id, { password: nextPassword });
                }}
                className="admin-btn admin-btn-ghost"
              >
                Sifre Sifirla
              </button>
            </div>
          ))}
        </div>
      </section>

      {message && <p className={`admin-message ${messageTone}`}>{message}</p>}
    </div>
  );
}
