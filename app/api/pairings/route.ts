import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

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
        relValues: response.relValues,
        chartId: response.chartId,
      },
    });

    const reltypes = await prisma.relType.findMany();
    reltypes.forEach(async (reltype) => {
      const relValuesForPairing = await prisma.relValuesForPairings.create({
        data: {
          value: 0,
          pairingId: pairing.id,
          reltypeId: reltype.id,
        },
      });
    });

    return NextResponse.json({ pairing }, { status: 200 });
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
