import type { DefaultSession } from "next-auth";
import type { AdminRole } from "../../generated/prisma";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: AdminRole;
      username: string | null;
      isAdmin: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    role: AdminRole;
    username: string | null;
    isActive: boolean;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id?: string;
    role?: AdminRole;
    username?: string | null;
    isActive?: boolean;
    isAdmin?: boolean;
  }
}
