import Link from "next/link";
import { requireContentAdminPage } from "~/server/auth/page-guards";
import { TourEditor } from "~/app/admin/tours/tour-editor";

export default async function AdminNewTourPage() {
  await requireContentAdminPage();

  return (
    <main className="admin-root px-4 py-8 md:px-8">
      <section className="admin-container max-w-6xl space-y-6">
        <header className="admin-hero p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="admin-eyebrow">Tur Yonetimi</p>
              <h1 className="admin-title text-3xl">Yeni Tur</h1>
              <p className="admin-description">Kataloga yeni bir tur kaydi ekleyin.</p>
            </div>
            <Link href="/admin/tours" className="admin-btn admin-btn-ghost">
              Tur Listesi
            </Link>
          </div>
        </header>

        <TourEditor mode="create" />
      </section>
    </main>
  );
}
