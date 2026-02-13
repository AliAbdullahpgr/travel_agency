import { NextResponse } from "next/server";
import { requireContentAdminForApi } from "~/server/auth/api-guards";
import { deleteAdminTour, getAdminTourById, updateAdminTour } from "~/server/cms/tours";
import { tourInputSchema } from "~/server/cms/tour-schema";

type Params = { params: Promise<{ id: string }> };

export async function GET(_: Request, { params }: Params) {
  const authResult = await requireContentAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  const { id } = await params;
  const tour = await getAdminTourById(id);

  if (!tour) {
    return NextResponse.json({ error: "Tur bulunamadı." }, { status: 404 });
  }

  return NextResponse.json({ tour }, { status: 200 });
}

export async function PUT(request: Request, { params }: Params) {
  const authResult = await requireContentAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  try {
    const { id } = await params;
    const body = (await request.json()) as unknown;
    const parsed = tourInputSchema.parse(body);
    const updated = await updateAdminTour(id, parsed);

    return NextResponse.json({ ok: true, id: updated?.id ?? id }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Tur güncellenemedi." },
      { status: 400 },
    );
  }
}

export async function DELETE(_: Request, { params }: Params) {
  const authResult = await requireContentAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  const { id } = await params;
  await deleteAdminTour(id);
  return NextResponse.json({ ok: true }, { status: 200 });
}

