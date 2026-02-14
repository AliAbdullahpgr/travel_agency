import { requireContentAdminPage } from "~/server/auth/page-guards";
import { getSiteShellContent } from "~/server/cms/sections";
import { ShellEditor } from "~/app/admin/content/shell/shell-editor";

export default async function AdminShellContentPage() {
  await requireContentAdminPage();
  const initialData = await getSiteShellContent();

  return (
    <section className="admin-container max-w-7xl space-y-6">
      <header className="admin-hero p-6">
        <p className="admin-eyebrow">CMS</p>
        <h1 className="admin-title text-2xl md:text-3xl">Shell Icerikleri</h1>
        <p className="admin-description">Nav, footer ve iletisim rayi alanlarini duzenleyin.</p>
      </header>

      <ShellEditor initialData={initialData} />
    </section>
  );
}
