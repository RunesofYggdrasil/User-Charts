import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import bcrypt from "bcrypt";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number.parseInt(params.id);
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id,
      },
    });
    return NextResponse.json({ user }, { status: 200 });
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
    const hashedPassword = await bcrypt.hash(response.password, 10);
    const user = await prisma.user.update({
      data: {
        username: response.username,
        password: hashedPassword,
      },
      where: {
        id,
      },
    });
    return NextResponse.json({ user }, { status: 200 });
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
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
