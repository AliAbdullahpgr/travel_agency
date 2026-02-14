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

type FilterTab = "ALL" | "PENDING" | "APPROVED" | "REJECTED";

type Props = {
  initialInquiries: SerializedInquiry[];
  updateStatusAction: (inquiryId: string, status: string) => Promise<void>;
};

const CATEGORY_LABELS: Record<string, string> = {
  umre: "Umre",
  hac: "Hac",
  kultur: "Kultur Turu",
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
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [activeTab, setActiveTab] = useState<FilterTab>("ALL");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
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

  const filtered = useMemo(() => {
    let result = inquiries;

    if (activeTab !== "ALL") {
      result = result.filter((i) => i.status === activeTab);
    }

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

    return result;
  }, [inquiries, activeTab, search]);

  /* ── Handlers ── */
  const handleStatusChange = (inquiryId: string, newStatus: string) => {
    // Optimistic update
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

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const tabs: { key: FilterTab; label: string; count: number }[] = [
    { key: "ALL", label: "Tumunu Gor", count: counts.all },
    { key: "PENDING", label: "Bekleyen", count: counts.pending },
    { key: "APPROVED", label: "Onaylanan", count: counts.approved },
    { key: "REJECTED", label: "Reddedilen", count: counts.rejected },
  ];

  return (
    <>
      {/* ── Stats ── */}
      <section className="grid gap-4 sm:grid-cols-4">
        <article className="admin-stat-card admin-stat-card--emerald">
          <p className="admin-stat-label">Toplam Basvuru</p>
          <p className="admin-stat-value admin-stat-value--emerald">{counts.all}</p>
        </article>
        <article className="admin-stat-card admin-stat-card--teal">
          <p className="admin-stat-label">Bugun Gelen</p>
          <p className="admin-stat-value admin-stat-value--teal">{counts.today}</p>
        </article>
        <article className="admin-stat-card admin-stat-card--gold">
          <p className="admin-stat-label">Bekleyen Onay</p>
          <p className="admin-stat-value admin-stat-value--gold">{counts.pending}</p>
        </article>
        <article className="admin-stat-card admin-stat-card--rose">
          <p className="admin-stat-label">Reddedilen</p>
          <p className="admin-stat-value admin-stat-value--rose">{counts.rejected}</p>
        </article>
      </section>

      {/* ── Toolbar: Tabs + Search ── */}
      <section className="inquiry-toolbar">
        <div className="inquiry-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`inquiry-tab ${activeTab === tab.key ? "inquiry-tab--active" : ""}`}
            >
              {tab.label}
              <span className="inquiry-tab-count">{tab.count}</span>
            </button>
          ))}
        </div>
        <div className="inquiry-search">
          <FiSearch className="inquiry-search-icon" />
          <input
            type="text"
            placeholder="Isim, telefon veya e-posta ile ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="inquiry-search-input"
          />
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="inquiry-list">
        {filtered.length === 0 && (
          <div className="inquiry-empty">
            <FiFileText size={32} />
            <p>
              {search.trim()
                ? "Aramanizla eslesen basvuru bulunamadi."
                : "Bu kategoride basvuru bulunmuyor."}
            </p>
          </div>
        )}

        {filtered.map((item) => {
          const isExpanded = expandedId === item.id;
          const isLoading = pendingIds.has(item.id);

          return (
            <article
              key={item.id}
              className={`inquiry-card ${isExpanded ? "inquiry-card--expanded" : ""} ${
                item.status === "APPROVED"
                  ? "inquiry-card--approved"
                  : item.status === "REJECTED"
                    ? "inquiry-card--rejected"
                    : "inquiry-card--pending"
              }`}
            >
              {/* Card header — always visible */}
              <div
                className="inquiry-card-header"
                onClick={() => toggleExpand(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleExpand(item.id)}
              >
                <div className="inquiry-card-avatar">
                  {item.fullName.charAt(0).toUpperCase()}
                </div>

                <div className="inquiry-card-summary">
                  <div className="inquiry-card-name-row">
                    <span className="inquiry-card-name">{item.fullName}</span>
                    <span
                      className={`admin-badge ${
                        item.status === "APPROVED"
                          ? "admin-badge--approved"
                          : item.status === "REJECTED"
                            ? "admin-badge--rejected"
                            : "admin-badge--pending"
                      }`}
                    >
                      <span
                        className={`admin-badge-dot ${
                          item.status === "APPROVED"
                            ? "admin-badge-dot--approved"
                            : item.status === "REJECTED"
                              ? "admin-badge-dot--rejected"
                              : "admin-badge-dot--pending"
                        }`}
                      />
                      {item.status === "APPROVED"
                        ? "Onaylandi"
                        : item.status === "REJECTED"
                          ? "Reddedildi"
                          : "Beklemede"}
                    </span>
                  </div>
                  <div className="inquiry-card-meta">
                    <span>
                      <FiPhone size={12} /> {item.phone}
                    </span>
                    {item.tourCategory && (
                      <span>
                        <FiMapPin size={12} /> {CATEGORY_LABELS[item.tourCategory] ?? item.tourCategory}
                      </span>
                    )}
                    <span>
                      <FiCalendar size={12} /> {formatDate(item.createdAt)}
                    </span>
                  </div>
                </div>

                <button className="inquiry-card-toggle" aria-label="Detay goster">
                  {isExpanded ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                </button>
              </div>

              {/* Expandable detail */}
              <div className={`inquiry-card-body ${isExpanded ? "inquiry-card-body--open" : ""}`}>
                <div className="inquiry-card-body-inner">
                  <div className="inquiry-detail-grid">
                    <DetailItem icon={<FiUser size={14} />} label="Ad Soyad" value={item.fullName} />
                    <DetailItem icon={<FiPhone size={14} />} label="Telefon" value={item.phone} />
                    <DetailItem icon={<FiMail size={14} />} label="E-posta" value={item.email ?? "Belirtilmedi"} />
                    <DetailItem icon={<FiMapPin size={14} />} label="Sehir / Ulke" value={`${item.city ?? "-"} / ${item.country ?? "-"}`} />
                    <DetailItem icon={<FiCalendar size={14} />} label="Planlanan Ay" value={item.plannedMonth} />
                    <DetailItem icon={<FiClock size={14} />} label="Sure" value={item.duration ?? "Belirtilmedi"} />
                    <DetailItem icon={<FiMapPin size={14} />} label="Kalkis Sehri" value={item.departureCity ?? "Belirtilmedi"} />
                    <DetailItem
                      icon={<FiMapPin size={14} />}
                      label="Tur Kategorisi"
                      value={item.tourCategory ? (CATEGORY_LABELS[item.tourCategory] ?? item.tourCategory) : "Belirtilmedi"}
                    />
                    <DetailItem icon={<FiUsers size={14} />} label="Yetiskin / Cocuk" value={`${item.adults ?? 0} / ${item.children ?? 0}`} />
                    <DetailItem
                      icon={<FiCheck size={14} />}
                      label="KVKK Onayi"
                      value={item.consentAccepted ? "Onay Verildi" : "Onay Verilmedi"}
                      highlight={item.consentAccepted ? "approved" : "rejected"}
                    />
                  </div>

                  {item.notes && (
                    <div className="inquiry-detail-notes">
                      <FiFileText size={14} />
                      <div>
                        <span className="inquiry-detail-label">Notlar</span>
                        <p>{item.notes}</p>
                      </div>
                    </div>
                  )}

                  {item.reviewedAt && (
                    <p className="inquiry-detail-reviewed">
                      Inceleme tarihi: {formatDate(item.reviewedAt)}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="inquiry-actions">
                    {item.status !== "APPROVED" && (
                      <button
                        onClick={() => handleStatusChange(item.id, "APPROVED")}
                        disabled={isLoading}
                        className="inquiry-action-btn inquiry-action-btn--approve"
                      >
                        {isLoading ? <FiLoader className="inquiry-spinner" size={14} /> : <FiCheck size={14} />}
                        Onayla
                      </button>
                    )}
                    {item.status !== "REJECTED" && (
                      <button
                        onClick={() => handleStatusChange(item.id, "REJECTED")}
                        disabled={isLoading}
                        className="inquiry-action-btn inquiry-action-btn--reject"
                      >
                        {isLoading ? <FiLoader className="inquiry-spinner" size={14} /> : <FiX size={14} />}
                        Reddet
                      </button>
                    )}
                    {item.status !== "PENDING" && (
                      <button
                        onClick={() => handleStatusChange(item.id, "PENDING")}
                        disabled={isLoading}
                        className="inquiry-action-btn inquiry-action-btn--reset"
                      >
                        {isLoading ? <FiLoader className="inquiry-spinner" size={14} /> : <FiClock size={14} />}
                        Beklemeye Al
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}

/* ── Helper sub-component ── */
function DetailItem({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: "approved" | "rejected";
}) {
  return (
    <div className="inquiry-detail-item">
      <span className="inquiry-detail-icon">{icon}</span>
      <div>
        <span className="inquiry-detail-label">{label}</span>
        <span className={`inquiry-detail-value ${highlight ? `inquiry-detail-value--${highlight}` : ""}`}>
          {value}
        </span>
      </div>
    </div>
  );
}
