import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const relType = await prisma.relType.findFirstOrThrow({
      where: {
        id,
      },
    });
    return NextResponse.json({ relType }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const response = await request.json();
    const relType = await prisma.relType.update({
      data: {
        index: response.index,
        name: response.name,
        hexCode: response.hexCode,
        chartId: response.chartId,
      },
      where: {
        id,
      },
    });
    return NextResponse.json({ relType }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const relType = await prisma.relType.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ relType }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
