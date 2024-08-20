import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const relValuesForPairings =
      await prisma.relValuesForPairings.findFirstOrThrow({
        where: {
          id,
        },
      });
    return NextResponse.json({ relValuesForPairings }, { status: 200 });
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
    const relValuesForPairings = await prisma.relValuesForPairings.update({
      data: {
        pairingId: response.pairingId,
        relValId: response.relValId,
      },
      where: {
        id,
      },
    });
    return NextResponse.json({ relValuesForPairings }, { status: 200 });
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
    const relValuesForPairings = await prisma.relValuesForPairings.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ relValuesForPairings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
