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
        permitted: response.permitted,
        relValues: response.relValues,
        chartId: response.chartId,
      },
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
