import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUserAdminForApi } from "~/server/auth/api-guards";
import { hashPassword } from "~/server/auth/password";
import { db } from "~/server/db";

const createUserSchema = z.object({
  username: z.string().trim().min(3),
  password: z.string().min(8),
  role: z.enum(["SUPER_ADMIN", "EDITOR"]),
  name: z.string().trim().min(1).optional(),
  email: z
    .string()
    .email()
    .optional()
    .or(z.literal(""))
    .transform((value) => (value === "" ? null : value)),
});

const patchUserSchema = z.object({
  id: z.string().trim().min(1),
  isActive: z.boolean().optional(),
  name: z.string().trim().min(1).nullable().optional(),
  email: z.string().email().nullable().optional(),
  password: z.string().min(8).optional(),
});

export async function GET() {
  const authResult = await requireUserAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  const users = await db.user.findMany({
    orderBy: { username: "asc" },
    select: {
      id: true,
      username: true,
      role: true,
      isActive: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return NextResponse.json({ users }, { status: 200 });
}

export async function POST(request: Request) {
  const authResult = await requireUserAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  try {
    const body = (await request.json()) as unknown;
    const parsed = createUserSchema.parse(body);
    const passwordHash = await hashPassword(parsed.password);

    const user = await db.user.create({
      data: {
        username: parsed.username,
        passwordHash,
        role: parsed.role,
        isActive: true,
        name: parsed.name ?? null,
        email: parsed.email,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json({ ok: true, id: user.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Kullanıcı oluşturulamadı." },
      { status: 400 },
    );
  }
}

export async function PATCH(request: Request) {
  const authResult = await requireUserAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  try {
    const body = (await request.json()) as unknown;
    const parsed = patchUserSchema.parse(body);

    const data: {
      isActive?: boolean;
      name?: string | null;
      email?: string | null;
      passwordHash?: string;
    } = {};

    if (parsed.isActive !== undefined) {
      data.isActive = parsed.isActive;
    }
    if (parsed.name !== undefined) {
      data.name = parsed.name;
    }
    if (parsed.email !== undefined) {
      data.email = parsed.email;
    }
    if (parsed.password) {
      data.passwordHash = await hashPassword(parsed.password);
    }

    await db.user.update({
      where: { id: parsed.id },
      data,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Kullanıcı güncellenemedi." },
      { status: 400 },
    );
  }
}
