import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    const charts = await prisma.chart.findMany();
    return NextResponse.json({ charts }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const chart = await prisma.chart.create({
      data: {
        userId: response.userId,
        publicity: response.publicity,
        chartType: response.chartType,
      },
    });
    return NextResponse.json({ chart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const charts = await prisma.chart.deleteMany();
    return NextResponse.json({ charts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
