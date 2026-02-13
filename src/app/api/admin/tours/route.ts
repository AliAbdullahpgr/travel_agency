import { NextResponse } from "next/server";
import { requireContentAdminForApi } from "~/server/auth/api-guards";
import { createAdminTour, listAdminTours } from "~/server/cms/tours";
import { tourInputSchema } from "~/server/cms/tour-schema";

export async function GET(request: Request) {
  const authResult = await requireContentAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  const { searchParams } = new URL(request.url);
  const search = searchParams.get("q")?.trim() ?? "";

  const tours = await listAdminTours(search || undefined);
  return NextResponse.json({ tours }, { status: 200 });
}

export async function POST(request: Request) {
  const authResult = await requireContentAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  try {
    const body = (await request.json()) as unknown;
    const parsed = tourInputSchema.parse(body);
    const created = await createAdminTour(parsed);
    return NextResponse.json({ ok: true, id: created.id }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Tur oluşturulamadı." },
      { status: 400 },
    );
  }
}

