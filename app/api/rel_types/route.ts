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

    let relIndex = 0;
    const reltypes = await prisma.relType.findMany();
    for (let relIndex = 0; relIndex < reltypes.length; relIndex++) {
      try {
        const index = await prisma.relType.findFirstOrThrow({
          where: {
            id: relIndex,
          },
        });
      } catch (error) {
        relIndex--;
        break;
      }
    }

    const relType = await prisma.relType.create({
      data: {
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
