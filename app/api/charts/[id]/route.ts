import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const chart = await prisma.chart.findFirstOrThrow({
      where: {
        id,
      },
    });
    return NextResponse.json({ chart }, { status: 200 });
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
    const chart = await prisma.chart.update({
      data: {
        userId: response.userId,
        publicity: response.publicity,
        chartType: response.chartType,
      },
      where: {
        id,
      },
    });
    return NextResponse.json({ chart }, { status: 200 });
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
    const chart = await prisma.chart.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ chart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
