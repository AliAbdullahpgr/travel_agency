import Link from "next/link";
import { requireContentAdminPage } from "~/server/auth/page-guards";
import { getSiteShellContent } from "~/server/cms/sections";
import { ShellEditor } from "~/app/admin/content/shell/shell-editor";

export default async function AdminShellContentPage() {
  await requireContentAdminPage();
  const initialData = await getSiteShellContent();

  return (
    <main className="admin-root px-4 py-8 md:px-8">
      <section className="admin-container max-w-7xl space-y-6">
        <header className="admin-hero p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="admin-eyebrow">CMS</p>
              <h1 className="admin-title text-3xl">Shell Icerikleri</h1>
              <p className="admin-description">Nav, footer ve iletisim rayi alanlarini duzenleyin.</p>
            </div>
            <Link href="/admin" className="admin-btn admin-btn-ghost">
              Admin Ana Sayfa
            </Link>
          </div>
        </header>

        <ShellEditor initialData={initialData} />
      </section>
    </main>
  );
}
