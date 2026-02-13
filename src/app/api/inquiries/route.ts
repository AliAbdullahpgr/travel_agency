import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "~/server/db";

const optionalText = z.string().trim().max(200).optional();

const inquiryPayloadSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(8).max(30),
  email: z.string().trim().email().max(160).optional(),
  city: optionalText,
  country: optionalText,
  plannedMonth: z.string().trim().min(2).max(40),
  duration: z.string().trim().max(40).optional(),
  departureCity: optionalText,
  tourCategory: z.enum(["umre", "hac", "kultur"]).optional(),
  adults: z.number().int().min(1).max(20),
  children: z.number().int().min(0).max(20).optional(),
  notes: z.string().trim().max(2000).optional(),
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

    const inquiry = await (db as any).inquiry.create({
      data: {
        fullName: parsed.data.fullName,
        phone: parsed.data.phone,
        email: parsed.data.email,
        city: parsed.data.city,
        country: parsed.data.country,
        plannedMonth: parsed.data.plannedMonth,
        duration: parsed.data.duration,
        departureCity: parsed.data.departureCity,
        tourCategory: parsed.data.tourCategory,
        adults: parsed.data.adults,
        children: parsed.data.children,
        notes: parsed.data.notes,
        consentAccepted: parsed.data.consentAccepted,
      },
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
