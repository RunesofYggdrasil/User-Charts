import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { RelValuesForPairings } from "@prisma/client";

export async function GET(request: NextRequest) {
  try {
    const pairings = await prisma.pairing.findMany();
    return NextResponse.json({ pairings }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const pairing = await prisma.pairing.create({
      data: {
        name: response.name,
        characterOneId: response.characterOneId,
        characterTwoId: response.characterTwoId,
        chartId: response.chartId,
      },
    });

    const relValuesForPairings: RelValuesForPairings[] = [];
    const relTypes = await prisma.relType.findMany({
      where: {
        chartId: response.chartId,
      },
    });
    relTypes.forEach(async (relType) => {
      const relValuesForPairing = await prisma.relValuesForPairings.create({
        data: {
          value: 0,
          pairingId: pairing.id,
          reltypeId: relType.id,
        },
      });
      relValuesForPairings.push(relValuesForPairing);
    });
    return NextResponse.json(
      { pairing, relValuesForPairings },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const pairings = await prisma.pairing.deleteMany();
    return NextResponse.json({ pairings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
