import { NextResponse } from "next/server";
import { requireContentAdminForApi } from "~/server/auth/api-guards";
import { db } from "~/server/db";

export async function GET() {
  const authResult = await requireContentAdminForApi();
  if (!authResult.ok) {
    return authResult.response;
  }

  const inquiries = await db.inquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ inquiries }, { status: 200 });
}

