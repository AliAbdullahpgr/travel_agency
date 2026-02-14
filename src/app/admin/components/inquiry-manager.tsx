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

  const toggleExpand = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6">
      {/* ── Stats ── */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Toplam Basvuru" value={counts.all} color="blue" />
        <StatCard label="Bugun Gelen" value={counts.today} color="green" />
        <StatCard label="Bekleyen Onay" value={counts.pending} color="amber" />
        <StatCard label="Reddedilen" value={counts.rejected} color="red" />
      </section>

      {/* ── Toolbar ── */}
      <section className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
           <div className="relative">
             <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
             <input
               type="text"
               placeholder="Ara..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-40 rounded-lg border border-gray-200 py-1.5 pl-9 pr-3 text-sm transition-all focus:w-64 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
             />
           </div>
        </div>

        <div className="flex items-center gap-2">
            {/* Minimal Actions */}
        </div>
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
                <th className="w-10 px-6 py-3 text-right"></th>
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
                  <>
                  <tr 
                    key={item.id} 
                    className={`cursor-pointer transition-colors hover:bg-slate-50 ${selectedId === item.id ? "bg-slate-50" : ""}`}
                    onClick={() => toggleExpand(item.id)}
                  >
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
                        <span className="flex items-center gap-1 text-gray-600">
                          <FiPhone size={12} /> {item.phone}
                        </span>
                        {item.email && (
                          <span className="flex items-center gap-1 text-gray-500">
                            <FiMail size={12} /> {item.email}
                          </span>
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
                       <FiChevronDown 
                         size={18} 
                         className={`text-gray-400 transition-transform duration-200 ${selectedId === item.id ? "rotate-180" : ""}`}
                       />
                    </td>
                  </tr>
                  
                  {/* Expanded Row Content */}
                  {selectedId === item.id && (
                    <tr className="bg-slate-50/50">
                      <td colSpan={6} className="px-6 pb-6 pt-0">
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm animate-in fade-in zoom-in-95 duration-200">
                          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            
                            {/* Column 1: Applicant Info */}
                            <div className="space-y-4">
                              <h4 className="border-b border-gray-100 pb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                Basvuru Detaylari
                              </h4>
                              <div className="space-y-3">
                                <div className="grid grid-cols-2 gap-4">
                                   <div>
                                     <span className="block text-xs text-gray-500">Kalkis Sehri</span>
                                     <span className="text-sm font-medium text-gray-900">{item.departureCity ?? "-"}</span>
                                   </div>
                                   <div>
                                     <span className="block text-xs text-gray-500">Sure</span>
                                     <span className="text-sm font-medium text-gray-900">{item.duration ?? "-"}</span>
                                   </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                   <div>
                                     <span className="block text-xs text-gray-500">Yetiskin</span>
                                     <span className="text-sm font-medium text-gray-900">{item.adults ?? 0}</span>
                                   </div>
                                   <div>
                                     <span className="block text-xs text-gray-500">Cocuk</span>
                                     <span className="text-sm font-medium text-gray-900">{item.children ?? 0}</span>
                                   </div>
                                </div>
                                <div>
                                   <span className="block text-xs text-gray-500">KVKK Onayi</span>
                                   <span className={`text-sm font-medium ${item.consentAccepted ? "text-emerald-600" : "text-rose-600"}`}>
                                     {item.consentAccepted ? "Onaylandi" : "Onaylanmadi"}
                                   </span>
                                </div>
                              </div>
                            </div>

                            {/* Column 2: Notes */}
                            <div className="space-y-4">
                              <h4 className="border-b border-gray-100 pb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                Musteri Notu
                              </h4>
                              {item.notes ? (
                                <div className="rounded-lg bg-gray-50 p-4 text-sm italic text-gray-600 border border-gray-100">
                                  "{item.notes}"
                                </div>
                              ) : (
                                <p className="text-sm text-gray-400 italic">Musteri notu bulunmuyor.</p>
                              )}
                              
                              <div className="mt-4 pt-4">
                                <span className="block text-xs text-gray-500">Inceleme Durumu</span>
                                {item.reviewedAt ? (
                                  <span className="text-xs text-gray-400">
                                    Son guncelleme: {formatDate(item.reviewedAt)}
                                  </span>
                                ) : (
                                  <span className="text-xs text-amber-600">Henuz incelenmedi</span>
                                )}
                              </div>
                            </div>

                            {/* Column 3: Actions */}
                            <div className="flex flex-col justify-start rounded-lg bg-gray-50 border border-gray-100 p-4">
                              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                                Hizli Islem
                              </h4>
                              
                              <div className="flex items-center gap-2">
                                {item.status !== "APPROVED" && (
                                  <button
                                    onClick={(e) => { e.stopPropagation(); handleStatusChange(item.id, "APPROVED"); }}
                                    disabled={pendingIds.has(item.id)}
                                    className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-700 disabled:opacity-50"
                                    title="Onayla"
                                  >
                                    {pendingIds.has(item.id) ? <FiLoader className="animate-spin" /> : <FiCheck />}
                                    Onayla
                                  </button>
                                )}
                                
                                {item.status !== "REJECTED" && (
                                  <button
                                    onClick={(e) => { e.stopPropagation(); handleStatusChange(item.id, "REJECTED"); }}
                                    disabled={pendingIds.has(item.id)}
                                    className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-2.5 text-sm font-semibold text-rose-600 transition-all hover:bg-rose-50 disabled:opacity-50"
                                    title="Reddet"
                                  >
                                    {pendingIds.has(item.id) ? <FiLoader className="animate-spin" /> : <FiX />}
                                    Reddet
                                  </button>
                                )}
                              </div>

                              {/* Only show Wait/Pending if it's not already pending, and as a secondary small link below */}
                              {item.status !== "PENDING" && (
                                <button
                                  onClick={(e) => { e.stopPropagation(); handleStatusChange(item.id, "PENDING"); }}
                                  className="mt-3 text-xs font-medium text-gray-400 hover:text-gray-600 hover:underline mx-auto"
                                >
                                  Beklemeye Al
                                </button>
                              )}
                            </div>

                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                  </>
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
    </div>
  );
}

/* ── Sub-components ── */

function StatCard({ label, value, color }: { label: string; value: number; color: "blue" | "green" | "amber" | "red" }) {
  const colorMap = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", iconBg: "bg-blue-100" },
    green: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", iconBg: "bg-emerald-100" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100", iconBg: "bg-amber-100" },
    red: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100", iconBg: "bg-rose-100" },
  };

  const current = colorMap[color];
  
  // Icon mapping based on color/context
  const Icons = {
    blue: FiFileText,   // Applications
    green: FiCheck,     // Today/Success
    amber: FiClock,     // Pending
    red: FiX,           // Rejected
  };
  const Icon = Icons[color];

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-all hover:shadow-[0_8px_30px_-4px_rgba(6,81,237,0.12)]">
      <div className="mb-4 flex items-start justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${current.iconBg} ${current.text}`}>
          <Icon size={24} />
        </div>
        <button className="text-gray-300 transition-colors hover:text-gray-500">
          <FiMoreHorizontal size={20} />
        </button>
      </div>
      
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">{label}</h3>
        <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
      </div>
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


