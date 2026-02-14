import { requireContentAdminPage } from "~/server/auth/page-guards";
import { TourEditor } from "~/app/admin/tours/tour-editor";

export default async function AdminNewTourPage() {
  await requireContentAdminPage();

  return (
    <section className="admin-container max-w-6xl space-y-6">
      <header className="admin-hero p-6">
        <p className="admin-eyebrow">Tur Yonetimi</p>
        <h1 className="admin-title text-2xl md:text-3xl">Yeni Tur</h1>
        <p className="admin-description">Kataloga yeni bir tur kaydi ekleyin.</p>
      </header>

      <TourEditor mode="create" />
    </section>
  );
}
