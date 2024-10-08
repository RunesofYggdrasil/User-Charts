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
        chartId: response.chartId,
      },
    });

    const relTypes = await prisma.relType.findMany({
      where: {
        NOT: {
          name: "None",
        },
        chartId: response.chartId,
      },
    });
    const relValuesForPairingsCompletion = new Promise(async (resolve) => {
      for (const relType of relTypes) {
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
    return NextResponse.json({ pairing, complete }, { status: 200 });
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
