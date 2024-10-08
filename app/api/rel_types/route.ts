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
        name: response.name,
        hexCode: response.hexCode,
        textCode: response.textCode,
        chartId: response.chartId,
      },
    });

    const pairings = await prisma.pairing.findMany({
      where: {
        chartId: response.chartId,
      },
    });
    const relValuesForPairingsCompletion = new Promise(async (resolve) => {
      for (const pairing of pairings) {
        const relValuesForPairing = await prisma.relValuesForPairings.create({
          data: {
            value: 0,
            pairingId: pairing.id,
            reltypeId: relType.id,
          },
        });
      }
      resolve(true);
    });
    const complete = await relValuesForPairingsCompletion;
    return NextResponse.json({ relType, complete }, { status: 200 });
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
