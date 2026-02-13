import { NextResponse } from "next/server";
import { canManageContent, canManageUsers, getAdminUser } from "~/server/auth/guards";

export async function requireContentAdminForApi() {
  const user = await getAdminUser();

  if (!user || !canManageContent(user.role)) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Yetkisiz erişim." }, { status: 401 }),
    };
  }

  return {
    ok: true as const,
    user,
  };
}

export async function requireUserAdminForApi() {
  const user = await getAdminUser();

  if (!user || !canManageUsers(user.role)) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "Bu işlem için SUPER_ADMIN gerekir." }, { status: 403 }),
    };
  }

  return {
    ok: true as const,
    user,
  };
}

