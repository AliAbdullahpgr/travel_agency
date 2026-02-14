import { getAdminUser } from "~/server/auth/guards";
import { AdminSidebar } from "~/app/admin/components/admin-sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getAdminUser();

  if (!user) {
    return <>{children}</>;
  }

  return (
    <div className="admin-shell">
      <AdminSidebar
        user={{
          username: user.username ?? "admin",
          role: user.role,
        }}
      />
      <main className="admin-main">{children}</main>
    </div>
  );
}
