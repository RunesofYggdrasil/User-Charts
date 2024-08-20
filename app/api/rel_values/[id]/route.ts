import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const relValue = await prisma.relValue.findFirstOrThrow({
      where: {
        id,
      },
    });
    return NextResponse.json({ relValue }, { status: 200 });
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
    const relValue = await prisma.relValue.update({
      data: {
        relId: response.relId,
        value: response.value,
      },
      where: {
        id,
      },
    });
    return NextResponse.json({ relValue }, { status: 200 });
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
    const relValue = await prisma.relValue.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ relValue }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
