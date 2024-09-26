import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { RelValuesForPairings } from "@prisma/client";

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

    const relValuesForPairings: RelValuesForPairings[] = [];
    const pairings = await prisma.pairing.findMany({
      where: {
        chartId: response.chartId,
      },
    });
    const relValuesForPairingsCompletion = new Promise((resolve) => {
      pairings.forEach(async (pairing, index, array) => {
        const relValuesForPairing = await prisma.relValuesForPairings.create({
          data: {
            value: 0,
            pairingId: pairing.id,
            reltypeId: relType.id,
          },
        });
        relValuesForPairings.push(relValuesForPairing);
        if (index == array.length - 1) {
          resolve(true);
        }
      });
    });
    const complete = await relValuesForPairingsCompletion;
    return NextResponse.json(
      { relType, relValuesForPairings, complete },
      { status: 200 }
    );
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
