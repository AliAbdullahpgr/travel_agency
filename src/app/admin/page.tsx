import { revalidatePath } from "next/cache";
import { requireContentAdminPage } from "~/server/auth/page-guards";
import { db } from "~/server/db";
import { InquiryManager, type SerializedInquiry } from "~/app/admin/components/inquiry-manager";

export const dynamic = "force-dynamic";

async function updateInquiryStatus(inquiryId: string, status: string) {
  "use server";

  await requireContentAdminPage();

  if (!["PENDING", "APPROVED", "REJECTED"].includes(status)) {
    return;
  }

  await db.inquiry.update({
    where: { id: inquiryId },
    data: {
      status: status as "PENDING" | "APPROVED" | "REJECTED",
      reviewedAt: status === "PENDING" ? null : new Date(),
    },
  });

  revalidatePath("/admin");
}

export default async function AdminDashboardPage() {
  await requireContentAdminPage();

  const raw = await db.inquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  const inquiries: SerializedInquiry[] = raw.map((item) => ({
    id: item.id,
    fullName: item.fullName,
    phone: item.phone,
    email: item.email,
    city: item.city,
    country: item.country,
    plannedMonth: item.plannedMonth,
    duration: item.duration,
    departureCity: item.departureCity,
    tourCategory: item.tourCategory,
    adults: item.adults,
    children: item.children,
    notes: item.notes,
    consentAccepted: item.consentAccepted,
    status: item.status,
    reviewedAt: item.reviewedAt?.toISOString() ?? null,
    createdAt: item.createdAt.toISOString(),
  }));

  return (
    <section className="admin-container max-w-7xl space-y-6">
      <header className="admin-hero px-6 py-5">
        <p className="admin-eyebrow">Kontrol Paneli</p>
        <h1 className="admin-title text-2xl font-bold md:text-3xl">Basvuru Yonetimi</h1>
        <p className="admin-description">
          Gelen basvurulari takip edin, filtreleyin, detaylarini goruntuleyin ve hizlica islem yapin.
        </p>
      </header>

      <InquiryManager
        initialInquiries={inquiries}
        updateStatusAction={updateInquiryStatus}
      />
    </section>
  );
}
