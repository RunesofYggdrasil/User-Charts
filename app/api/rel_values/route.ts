import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    const relValues = await prisma.relValue.findMany();
    return NextResponse.json({ relValues }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const relValue = await prisma.relValue.create({
      data: {
        relId: response.relId,
        value: 0,
      },
    });

    const pairings = await prisma.pairing.findMany();
    pairings.forEach(async (pairing) => {
      const relValuesForPairing = await prisma.relValuesForPairings.create({
        data: {
          pairingId: pairing.id,
          relValId: relValue.id,
        },
      });
    });

    return NextResponse.json({ relValue }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const relValues = await prisma.relValue.deleteMany();
    return NextResponse.json({ relValues }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
