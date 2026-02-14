"use client";

import { useState, useTransition, useMemo } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiChevronUp,
  FiCheck,
  FiX,
  FiClock,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiFileText,
  FiLoader,
  FiFilter,
  FiDownload,
  FiMoreHorizontal,
  FiEye,
  FiTrash2,
} from "react-icons/fi";

/* ── Types ── */
export type SerializedInquiry = {
  id: string;
  fullName: string;
  phone: string;
  email: string | null;
  city: string | null;
  country: string | null;
  plannedMonth: string;
  duration: string | null;
  departureCity: string | null;
  tourCategory: "umre" | "hac" | "kultur" | null;
  adults: number | null;
  children: number | null;
  notes: string | null;
  consentAccepted: boolean;
  status: "PENDING" | "APPROVED" | "REJECTED";
  reviewedAt: string | null;
  createdAt: string;
};

type FilterStatus = "ALL" | "PENDING" | "APPROVED" | "REJECTED";
type SortField = "createdAt" | "fullName" | "plannedMonth";
type SortOrder = "asc" | "desc";

type Props = {
  initialInquiries: SerializedInquiry[];
  updateStatusAction: (inquiryId: string, status: string) => Promise<void>;
};

const CATEGORY_LABELS: Record<string, string> = {
  umre: "Umre",
  hac: "Hac",
  kultur: "Kultur Turu",
};

const STATUS_LABELS: Record<string, string> = {
  PENDING: "Bekliyor",
  APPROVED: "Onaylandi",
  REJECTED: "Reddedildi",
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(d);
};

const isSameDay = (iso: string) => {
  const d = new Date(iso);
  const now = new Date();
  return (
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear()
  );
};

export function InquiryManager({ initialInquiries, updateStatusAction }: Props) {
  // State
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("ALL");
  const [filterCategory, setFilterCategory] = useState<string>("ALL");
  const [sortField, setSortField] = useState<SortField>("createdAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [pendingIds, setPendingIds] = useState<Set<string>>(new Set());
  const [, startTransition] = useTransition();

  /* ── Computed ── */
  const counts = useMemo(() => {
    const all = inquiries.length;
    const pending = inquiries.filter((i) => i.status === "PENDING").length;
    const approved = inquiries.filter((i) => i.status === "APPROVED").length;
    const rejected = inquiries.filter((i) => i.status === "REJECTED").length;
    const today = inquiries.filter((i) => isSameDay(i.createdAt)).length;
    return { all, pending, approved, rejected, today };
  }, [inquiries]);

  const processedData = useMemo(() => {
    let result = [...inquiries];

    // Filter by Status
    if (filterStatus !== "ALL") {
      result = result.filter((i) => i.status === filterStatus);
    }

    // Filter by Category
    if (filterCategory !== "ALL") {
      result = result.filter((i) => i.tourCategory === filterCategory);
    }

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (i) =>
          i.fullName.toLowerCase().includes(q) ||
          i.phone.includes(q) ||
          (i.email?.toLowerCase().includes(q) ?? false) ||
          (i.city?.toLowerCase().includes(q) ?? false)
      );
    }

    // Sort
    result.sort((a, b) => {
      const aVal = a[sortField] ?? "";
      const bVal = b[sortField] ?? "";
      if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
      if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return result;
  }, [inquiries, filterStatus, filterCategory, search, sortField, sortOrder]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(processedData.length / itemsPerPage));
  const paginatedData = processedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  /* ── Handlers ── */
  const handleStatusChange = (inquiryId: string, newStatus: string) => {
    setPendingIds((prev) => new Set(prev).add(inquiryId));
    setInquiries((prev) =>
      prev.map((i) =>
        i.id === inquiryId
          ? { ...i, status: newStatus as SerializedInquiry["status"], reviewedAt: new Date().toISOString() }
          : i
      )
    );

    startTransition(async () => {
      try {
        await updateStatusAction(inquiryId, newStatus);
      } catch {
        // Revert on error
        setInquiries(initialInquiries);
      } finally {
        setPendingIds((prev) => {
          const next = new Set(prev);
          next.delete(inquiryId);
          return next;
        });
      }
    });
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("desc"); // Default to desc for new field
    }
  };

  const selectedInquiry = useMemo(
    () => inquiries.find((i) => i.id === selectedId),
    [inquiries, selectedId]
  );

  return (
    <div className="space-y-6">
      {/* ── Stats ── */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Toplam Basvuru" value={counts.all} color="blue" />
        <StatCard label="Bugun Gelen" value={counts.today} color="green" />
        <StatCard label="Bekleyen Onay" value={counts.pending} color="amber" />
        <StatCard label="Reddedilen" value={counts.rejected} color="red" />
      </section>

      {/* ── Toolbar ── */}
      <section className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          {/* Search */}
          <div className="relative w-full max-w-xs">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Isim, telefon ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-200 py-2 pl-9 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <select
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value as FilterStatus);
                setCurrentPage(1);
              }}
              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            >
              <option value="ALL">Tum Durumlar</option>
              <option value="PENDING">Bekleyenler</option>
              <option value="APPROVED">Onaylananlar</option>
              <option value="REJECTED">Reddedilenler</option>
            </select>
            <select
              value={filterCategory}
              onChange={(e) => {
                setFilterCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            >
              <option value="ALL">Tum Kategoriler</option>
              <option value="umre">Umre</option>
              <option value="hac">Hac</option>
              <option value="kultur">Kultur</option>
            </select>
          </div>
        </div>

        {/* Export / Actions (Placeholder) */}
        <button className="hidden items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 sm:flex">
          <FiDownload size={14} />
          <span>Dışa Aktar</span>
        </button>
      </section>

      {/* ── Data Table ── */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-700">
              <tr>
                <th 
                  className="cursor-pointer px-6 py-3 hover:bg-gray-100"
                  onClick={() => handleSort("fullName")}
                >
                  <div className="flex items-center gap-1">Ad Soyad {sortField === "fullName" && <SortIcon order={sortOrder} />}</div>
                </th>
                <th className="px-6 py-3">Iletisim</th>
                <th className="px-6 py-3">Kategori</th>
                <th 
                  className="cursor-pointer px-6 py-3 hover:bg-gray-100"
                  onClick={() => handleSort("plannedMonth")}
                >
                  <div className="flex items-center gap-1">Tarih {sortField === "plannedMonth" && <SortIcon order={sortOrder} />}</div>
                </th>
                <th className="px-6 py-3">Durum</th>
                <th className="px-6 py-3 text-right">Islem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    Kayit bulunamadi
                  </td>
                </tr>
              ) : (
                paginatedData.map((item) => (
                  <tr key={item.id} className="group hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                          {item.fullName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{item.fullName}</div>
                          <div className="text-xs text-gray-400">{item.city ?? "-"}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <a href={`tel:${item.phone}`} className="flex items-center gap-1 hover:text-blue-600">
                          <FiPhone size={12} /> {item.phone}
                        </a>
                        {item.email && (
                          <a href={`mailto:${item.email}`} className="flex items-center gap-1 hover:text-blue-600">
                            <FiMail size={12} /> {item.email}
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                        {CATEGORY_LABELS[item.tourCategory ?? ""] ?? "-"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-gray-900">{item.plannedMonth}</span>
                        <span className="text-xs text-gray-400">{formatDate(item.createdAt)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => setSelectedId(item.id)}
                        className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-blue-600"
                        title="Detaylari Gor"
                      >
                        <FiEye size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
          <div className="text-sm text-gray-500">
            Toplam <strong>{processedData.length}</strong> kayit, sayfa <strong>{currentPage}</strong> / {totalPages}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-lg border border-gray-200 px-3 py-1 text-sm disabled:opacity-50"
            >
              Onceki
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-lg border border-gray-200 px-3 py-1 text-sm disabled:opacity-50"
            >
              Sonraki
            </button>
          </div>
        </div>
      </div>

      {/* ── Slide-over Detail Panel ── */}
      {selectedId && selectedInquiry && (
        <DetailsPanel
          inquiry={selectedInquiry}
          onClose={() => setSelectedId(null)}
          onStatusChange={handleStatusChange}
          isLoading={pendingIds.has(selectedId)}
        />
      )}
    </div>
  );
}

/* ── Sub-components ── */

function StatCard({ label, value, color }: { label: string; value: number; color: "blue" | "green" | "amber" | "red" }) {
  const colorMap = {
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    green: "bg-emerald-50 text-emerald-700 border-emerald-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
    red: "bg-rose-50 text-rose-700 border-rose-100",
  };

  return (
    <div className={`rounded-xl border p-4 ${colorMap[color]}`}>
      <p className="text-xs font-medium opacity-80">{label}</p>
      <p className="mt-1 text-2xl font-bold">{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    PENDING: "bg-amber-100 text-amber-800",
    APPROVED: "bg-emerald-100 text-emerald-800",
    REJECTED: "bg-rose-100 text-rose-800",
  };
  
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status as keyof typeof styles] ?? "bg-gray-100 text-gray-800"}`}>
      {STATUS_LABELS[status] ?? status}
    </span>
  );
}

function SortIcon({ order }: { order: "asc" | "desc" }) {
  return order === "asc" ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />;
}

function DetailsPanel({
  inquiry,
  onClose,
  onStatusChange,
  isLoading,
}: {
  inquiry: SerializedInquiry;
  onClose: () => void;
  onStatusChange: (id: string, s: string) => void;
  isLoading: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/20 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="w-full max-w-md bg-white shadow-2xl animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900">Basvuru Detayi</h2>
            <button onClick={onClose} className="rounded-full p-2 hover:bg-gray-100">
              <FiX size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="mb-6 flex flex-col items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700">
                {inquiry.fullName.charAt(0).toUpperCase()}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">{inquiry.fullName}</h3>
                <p className="text-sm text-gray-500">Basvuru: {formatDate(inquiry.createdAt)}</p>
              </div>
              <StatusBadge status={inquiry.status} />
            </div>

            <div className="space-y-6">
              <Section title="Iletisim">
                <DetailRow icon={<FiPhone />} label="Telefon" value={inquiry.phone} />
                <DetailRow icon={<FiMail />} label="E-posta" value={inquiry.email ?? "-"} />
                <DetailRow icon={<FiMapPin />} label="Konum" value={`${inquiry.city ?? "-"} / ${inquiry.country ?? "-"}`} />
              </Section>

              <Section title="Tur Bilgileri">
                <DetailRow icon={<FiMapPin />} label="Kategori" value={CATEGORY_LABELS[inquiry.tourCategory ?? ""] ?? "-"} />
                <DetailRow icon={<FiCalendar />} label="Planlanan Ay" value={inquiry.plannedMonth} />
                <DetailRow icon={<FiClock />} label="Sure" value={inquiry.duration ?? "-"} />
                <DetailRow icon={<FiUsers />} label="Kisi Sayisi" value={`${inquiry.adults ?? 0} Yetiskin, ${inquiry.children ?? 0} Cocuk`} />
              </Section>
              
              <Section title="Diger">
                <DetailRow icon={<FiCheck />} label="KVKK" value={inquiry.consentAccepted ? "Onaylandi" : "Onaylanmadi"} />
                {inquiry.notes && (
                   <div className="rounded-lg bg-gray-50 p-3 text-sm text-gray-600 italic">
                     "{inquiry.notes}"
                   </div>
                )}
              </Section>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-4">
            <div className="grid grid-cols-2 gap-3">
              {inquiry.status === "PENDING" && (
                <>
                  <ActionButton 
                    intent="reject" 
                    onClick={() => { onStatusChange(inquiry.id, "REJECTED"); onClose(); }} 
                    disabled={isLoading}
                  >
                    Reddet
                  </ActionButton>
                  <ActionButton 
                    intent="approve" 
                    onClick={() => { onStatusChange(inquiry.id, "APPROVED"); onClose(); }} 
                    disabled={isLoading}
                  >
                    Onayla
                  </ActionButton>
                </>
              )}
              {inquiry.status === "APPROVED" && (
                 <ActionButton 
                    intent="neutral" 
                    onClick={() => { onStatusChange(inquiry.id, "PENDING"); onClose(); }} 
                    disabled={isLoading}
                  >
                    Beklemeye Al
                  </ActionButton>
              )}
              {inquiry.status === "REJECTED" && (
                 <ActionButton 
                    intent="neutral" 
                    onClick={() => { onStatusChange(inquiry.id, "PENDING"); onClose(); }} 
                    disabled={isLoading}
                  >
                    Tekrar Degerlendir
                  </ActionButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h4 className="border-b border-gray-100 pb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">{title}</h4>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-gray-400">{icon}</div>
      <div className="flex-1">
        <div className="text-xs text-gray-400">{label}</div>
        <div className="text-sm font-medium text-gray-900">{value}</div>
      </div>
    </div>
  );
}

function ActionButton({ intent, children, onClick, disabled }: { intent: "approve" | "reject" | "neutral"; children: React.ReactNode; onClick: () => void; disabled?: boolean }) {
  const styles = {
    approve: "bg-emerald-600 text-white hover:bg-emerald-700",
    reject: "bg-white text-rose-600 border border-rose-200 hover:bg-rose-50",
    neutral: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 w-full col-span-2",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors disabled:opacity-50 ${styles[intent]}`}
    >
      {children}
    </button>
  );
}

