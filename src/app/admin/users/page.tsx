import Link from "next/link";
import { requireUserAdminPage } from "~/server/auth/page-guards";
import { db } from "~/server/db";
import { UsersEditor } from "~/app/admin/users/users-editor";

export default async function AdminUsersPage() {
  await requireUserAdminPage();
  const users = await db.user.findMany({
    orderBy: { username: "asc" },
    select: {
      id: true,
      username: true,
      role: true,
      isActive: true,
      name: true,
      email: true,
    },
  });

  return (
    <main className="admin-root px-4 py-8 md:px-8">
      <section className="admin-container max-w-6xl space-y-6">
        <header className="admin-hero p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="admin-eyebrow">Super Admin</p>
              <h1 className="admin-title text-3xl">Kullanici Yonetimi</h1>
              <p className="admin-description">Panel kullanicilarini, rollerini ve erisim durumlarini yonetin.</p>
            </div>
            <Link href="/admin" className="admin-btn admin-btn-ghost">
              Admin Ana Sayfa
            </Link>
          </div>
        </header>

        <UsersEditor initialUsers={users} />
      </section>
    </main>
  );
}
