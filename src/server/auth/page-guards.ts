import { redirect } from "next/navigation";
import { canManageContent, canManageUsers, getAdminUser } from "~/server/auth/guards";

export async function requireContentAdminPage() {
  const user = await getAdminUser();

  if (!user || !canManageContent(user.role)) {
    redirect("/admin/login");
  }

  return user;
}

export async function requireUserAdminPage() {
  const user = await getAdminUser();

  if (!user || !canManageUsers(user.role)) {
    redirect("/admin");
  }

  return user;
}

