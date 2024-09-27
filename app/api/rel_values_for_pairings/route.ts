import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    const relValuesForPairings = await prisma.relValuesForPairings.findMany();
    return NextResponse.json({ relValuesForPairings }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const relValuesForPairing = await prisma.relValuesForPairings.create({
      data: {
        value: 0,
        pairingId: response.pairingId,
        reltypeId: response.reltypeId,
      },
    });
    return NextResponse.json({ relValuesForPairing }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const relValuesForPairings = await prisma.relValuesForPairings.deleteMany();
    return NextResponse.json({ relValuesForPairings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
