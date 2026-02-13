import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUserAdminForApi } from "~/server/auth/api-guards";
import { db } from "~/server/db";

type Params = { params: Promise<{ id: string }> };

const roleSchema = z.object({
  role: z.enum(["SUPER_ADMIN", "EDITOR"]),
});

export async function PATCH(request: Request, { params }: Params) {
  const authResult = await requireUserAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  try {
    const { id } = await params;
    const body = (await request.json()) as unknown;
    const parsed = roleSchema.parse(body);

    await db.user.update({
      where: { id },
      data: { role: parsed.role },
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Rol güncellenemedi." },
      { status: 400 },
    );
  }
}

