import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const character = await prisma.character.findFirstOrThrow({
      where: {
        id,
      },
    });
    return NextResponse.json({ character }, { status: 200 });
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
    const character = await prisma.character.update({
      data: {
        firstName: response.firstName,
        lastName: response.lastName,
        age: response.age,
        chartId: response.chartId,
      },
      where: {
        id,
      },
    });
    return NextResponse.json({ character }, { status: 200 });
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
    const character = await prisma.character.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ character }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
