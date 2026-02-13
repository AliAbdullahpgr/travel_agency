import { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { verifyPassword } from "~/server/auth/password";
import { db } from "~/server/db";

export const authConfig = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const parsed = z
          .object({
            username: z.string().trim().min(1),
            password: z.string().min(1),
          })
          .safeParse(credentials);

        if (!parsed.success) {
          return null;
        }

        const { username, password } = parsed.data;

        const user = await db.user.findFirst({
          where: {
            username,
            isActive: true,
            passwordHash: { not: null },
          },
        });

        if (!user?.passwordHash) {
          return null;
        }

        const passwordMatches = await verifyPassword(password, user.passwordHash);

        if (!passwordMatches) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          username: user.username,
          isActive: user.isActive,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
        token.isActive = user.isActive;
        token.isAdmin = user.role === "SUPER_ADMIN";
      }

      return token;
    },
    session: ({ session, token }) => {
      if (session.user) {
        const role = token.role === "SUPER_ADMIN" ? "SUPER_ADMIN" : "EDITOR";

        session.user.id =
          typeof token.id === "string"
            ? token.id
            : typeof token.sub === "string"
              ? token.sub
              : "";
        session.user.role = role;
        session.user.username =
          typeof token.username === "string" ? token.username : null;
        session.user.isAdmin = role === "SUPER_ADMIN";
      }

      return session;
    },
  },
} satisfies NextAuthConfig;
