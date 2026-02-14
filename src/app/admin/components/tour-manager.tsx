"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  FiSearch,
  FiChevronDown,
  FiChevronUp,
  FiCheck,
  FiX,
  FiEdit3,
  FiMapPin,
  FiLayout,
  FiMoreHorizontal,
  FiGlobe,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

/* ── Types ── */
export type SerializedTour = {
  id: string;
  title: string;
  slug: string;
  category: string;
  isPublished: boolean;
  isLandingFeatured: boolean;
  landingFeaturedOrder: number | null;
  updatedAt: Date | string;
  createdAt: Date | string;
};

type FilterStatus = "ALL" | "PUBLISHED" | "DRAFT";
type SortField = "updatedAt" | "title" | "category" | "landingFeaturedOrder";
type SortOrder = "asc" | "desc";

type Props = {
  initialTours: SerializedTour[];
};

const CATEGORY_LABELS: Record<string, string> = {
  umre: "Umre",
  hac: "Hac",
  kultur: "Kultur Turu",
};

const formatDate = (iso: Date | string) => {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
  }).format(d);
};

export function TourManager({ initialTours }: Props) {
  // State
  const [tours, setTours] = useState(initialTours);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("ALL");
  const [sortField, setSortField] = useState<SortField>("updatedAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  /* ── Computed ── */
  const counts = useMemo(() => {
    const all = tours.length;
    const published = tours.filter((t) => t.isPublished).length;
    const drafts = tours.filter((t) => !t.isPublished).length;
    const featured = tours.filter((t) => t.isLandingFeatured).length;
    return { all, published, drafts, featured };
  }, [tours]);

  const processedData = useMemo(() => {
    let result = [...tours];

    // Filter by Status
    if (filterStatus === "PUBLISHED") {
      result = result.filter((t) => t.isPublished);
    } else if (filterStatus === "DRAFT") {
      result = result.filter((t) => !t.isPublished);
    }

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.slug.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
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
  }, [tours, filterStatus, search, sortField, sortOrder]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(processedData.length / itemsPerPage));
  const paginatedData = processedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("desc"); // Default to desc for new field
    }
  };

  return (
    <div className="space-y-6">
      {/* ── Stats ── */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Toplam Tur" value={counts.all} color="blue" />
        <StatCard label="Yayinda" value={counts.published} color="green" />
        <StatCard label="Taslak" value={counts.drafts} color="amber" />
        <StatCard label="Anasayfa Vitrin" value={counts.featured} color="purple" />
      </section>

      {/* ── Toolbar ── */}
      <section className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
           <div className="relative">
             <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
             <input
               type="text"
               placeholder="Tur ara..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-40 rounded-lg border border-gray-200 py-1.5 pl-9 pr-3 text-sm transition-all focus:w-64 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
             />
           </div>
        </div>

        <div className="flex items-center gap-2">
           <Link href="/admin/tours/new" className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700">
             <span>+ Yeni Tur</span>
           </Link>
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
                  onClick={() => handleSort("title")}
                >
                  <div className="flex items-center gap-1">Baslik {sortField === "title" && <SortIcon order={sortOrder} />}</div>
                </th>
                <th 
                  className="cursor-pointer px-6 py-3 hover:bg-gray-100"
                  onClick={() => handleSort("category")}
                >
                  <div className="flex items-center gap-1">Kategori {sortField === "category" && <SortIcon order={sortOrder} />}</div>
                </th>
                <th className="px-6 py-3">Durum</th>
                <th className="px-6 py-3">Vitrin</th>
                <th 
                  className="cursor-pointer px-6 py-3 hover:bg-gray-100"
                  onClick={() => handleSort("updatedAt")}
                >
                  <div className="flex items-center gap-1">Guncelleme {sortField === "updatedAt" && <SortIcon order={sortOrder} />}</div>
                </th>
                <th className="w-10 px-6 py-3 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    Tur kaydi bulunamadi
                  </td>
                </tr>
              ) : (
                paginatedData.map((tour) => (
                  <tr 
                    key={tour.id} 
                    className="group transition-colors hover:bg-slate-50"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            <Link href={`/admin/tours/${tour.id}`}>{tour.title}</Link>
                        </div>
                        <div className="text-xs text-gray-400 font-mono">{tour.slug}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                         {CATEGORY_LABELS[tour.category] ?? tour.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {tour.isPublished ? (
                            <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                                <FiEye size={12} className="mr-1" /> Yayinda
                            </span>
                        ) : (
                            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                <FiEyeOff size={12} className="mr-1" /> Taslak
                            </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                        {tour.isLandingFeatured ? (
                            <div className="flex items-center gap-1 text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded w-fit">
                                <FiLayout size={12} />
                                <span>Sira: {tour.landingFeaturedOrder}</span>
                            </div>
                        ) : (
                            <span className="text-xs text-gray-400">-</span>
                        )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xs text-gray-500">
                            {formatDate(tour.updatedAt)}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                        <Link 
                            href={`/admin/tours/${tour.id}`}
                            className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
                            title="Duzenle"
                        >
                            Edit
                        </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* ── Pagination Footer ── */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-6 py-4">
          <div className="text-sm text-gray-500">
            Toplam <span className="font-medium text-gray-900">{processedData.length}</span> kayit gosteriliyor
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm disabled:opacity-50 hover:bg-gray-50 transition-colors"
            >
              Onceki
            </button>
            <span className="flex items-center px-2 text-sm font-medium text-gray-600">
                {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-sm disabled:opacity-50 hover:bg-gray-50 transition-colors"
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

function StatCard({ label, value, color }: { label: string; value: number; color: "blue" | "green" | "amber" | "red" | "purple" }) {
  const colorMap = {
    blue: { iconBg: "bg-blue-100", text: "text-blue-600" },
    green: { iconBg: "bg-emerald-100", text: "text-emerald-600" },
    amber: { iconBg: "bg-amber-100", text: "text-amber-600" },
    red: { iconBg: "bg-rose-100", text: "text-rose-600" },
    purple: { iconBg: "bg-purple-100", text: "text-purple-600" },
  };

  const current = colorMap[color];
  
  // Icon mapping
  const Icons = {
    blue: FiMapPin,     // Total Tours
    green: FiGlobe,     // Published
    amber: FiEdit3,     // Drafts
    red: FiX,           // Unused currently
    purple: FiLayout,   // Featured
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

function SortIcon({ order }: { order: "asc" | "desc" }) {
  return order === "asc" ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />;
}
