import type { AdminRole } from "../../../generated/prisma";
import { auth } from "~/server/auth";

type AdminSessionUser = {
  id: string;
  role: AdminRole;
  username: string | null;
  isAdmin: boolean;
};

export async function getAdminUser(): Promise<AdminSessionUser | null> {
  const session = await auth();
  const user = session?.user;

  if (!user?.id || !user.role) {
    return null;
  }

  return {
    id: user.id,
    role: user.role,
    username: user.username ?? null,
    isAdmin: user.role === "SUPER_ADMIN",
  };
}

export function canManageUsers(role: AdminRole): boolean {
  return role === "SUPER_ADMIN";
}

export function canManageContent(role: AdminRole): boolean {
  return role === "SUPER_ADMIN" || role === "EDITOR";
}

