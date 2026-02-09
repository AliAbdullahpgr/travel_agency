import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "~/server/db";

const inquiryPayloadSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(8).max(30),
  plannedMonth: z.string().trim().min(2).max(40),
  consentAccepted: z.literal(true),
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = inquiryPayloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Form alanlarini kontrol edip tekrar deneyin.",
          fields: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const inquiry = await db.inquiry.create({
      data: parsed.data,
      select: { id: true },
    });

    return NextResponse.json(
      { ok: true, inquiryId: inquiry.id },
      { status: 201 },
    );
  } catch (error) {
    console.error("Inquiry submission failed:", error);

    return NextResponse.json(
      { error: "Sistem hatasi olustu. Lutfen tekrar deneyin." },
      { status: 500 },
    );
  }
}
