import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function GET(request: NextRequest) {
  try {
    const characters = await prisma.character.findMany();
    return NextResponse.json({ characters }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    const character = await prisma.character.create({
      data: {
        firstName: response.firstName,
        lastName: response.lastName,
        chartId: response.chartId,
      },
    });

    const characters = await prisma.character.findMany({
      where: {
        chartId: response.chartId,
      },
    });
    console.log(characters);
    console.log(JSON.stringify(characters));
    if (characters.length > 0) {
      characters.forEach(async (chara) => {
        const pairing = await prisma.pairing.create({
          data: {
            name: chara.firstName + character.firstName,
            characterOneId: chara.id,
            characterTwoId: character.id,
            chartId: response.chartId,
          },
        });
      });
    }
    return NextResponse.json({ character }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const characters = await prisma.character.deleteMany();
    return NextResponse.json({ characters }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
