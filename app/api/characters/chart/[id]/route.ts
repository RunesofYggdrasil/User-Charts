import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const characters = await prisma.character.findMany({
      where: {
        chartId: id,
      },
    });
    return NextResponse.json({ characters }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
