import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    const relTypes = await prisma.relType.findMany();
    return NextResponse.json({ relTypes }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const relType = await prisma.relType.create({
      data: {
        index: response.index,
        name: response.name,
        hexCode: response.hexCode,
        chartId: response.chartId,
      },
    });
    return NextResponse.json({ relType }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const relTypes = await prisma.relType.deleteMany();
    return NextResponse.json({ relTypes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
