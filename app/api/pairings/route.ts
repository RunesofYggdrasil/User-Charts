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
        NOT: {
          name: "None",
        },
        chartId: response.chartId,
      },
    });
    const relValuesForPairingsCompletion = new Promise((resolve) => {
      relTypes.forEach(async (relType, index, array) => {
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
      { pairing, relValuesForPairings, complete },
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
