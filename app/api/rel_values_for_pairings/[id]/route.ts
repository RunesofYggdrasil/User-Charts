import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const relValuesForPairing =
      await prisma.relValuesForPairings.findFirstOrThrow({
        where: {
          id,
        },
      });
    return NextResponse.json({ relValuesForPairing }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const response = await request.json();
    const relValuesForPairing = await prisma.relValuesForPairings.update({
      data: {
        value: 0,
        pairingId: response.pairingId,
        reltypeId: response.reltypeId,
      },
      where: {
        id,
      },
    });
    return NextResponse.json({ relValuesForPairing }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const relValuesForPairing = await prisma.relValuesForPairings.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ relValuesForPairing }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
