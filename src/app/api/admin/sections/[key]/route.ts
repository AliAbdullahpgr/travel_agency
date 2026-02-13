import { NextResponse } from "next/server";
import { requireContentAdminForApi } from "~/server/auth/api-guards";
import { assertCmsSectionKey } from "~/server/cms/schemas";
import { getAnySectionForAdmin, upsertSectionData } from "~/server/cms/sections";

type Params = { params: Promise<{ key: string }> };

export async function GET(_: Request, { params }: Params) {
  const authResult = await requireContentAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  try {
    const { key: rawKey } = await params;
    const key = assertCmsSectionKey(rawKey);
    const data = await getAnySectionForAdmin(key);

    if (!data) {
      return NextResponse.json({ key, data: null }, { status: 200 });
    }

    return NextResponse.json({ key, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Bölüm okunamadı." },
      { status: 400 },
    );
  }
}

export async function PUT(request: Request, { params }: Params) {
  const authResult = await requireContentAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  try {
    const { key: rawKey } = await params;
    const key = assertCmsSectionKey(rawKey);
    const body = (await request.json()) as { data?: unknown };

    if (body.data === undefined) {
      return NextResponse.json({ error: "data alanı zorunludur." }, { status: 400 });
    }

    const result = await upsertSectionData(key, body.data, authResult.user.id);
    return NextResponse.json({ ok: true, key, updatedAt: result.updatedAt }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Bölüm kaydedilemedi." },
      { status: 400 },
    );
  }
}

