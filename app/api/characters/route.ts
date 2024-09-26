import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { Pairing } from "@prisma/client";

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

    const pairings: Pairing[] = [];
    const characters = await prisma.character.findMany({
      where: {
        chartId: response.chartId,
      },
    });
    const complete = new Promise((resolve) => {
      characters.forEach(async (chara, index, array) => {
        const pairing = await prisma.pairing.create({
          data: {
            name: chara.firstName + character.firstName,
            characterOneId: chara.id,
            characterTwoId: character.id,
            chartId: response.chartId,
          },
        });
        pairings.push(pairing);
        if (index == array.length - 1) {
          resolve(true);
        }
      });
    });
    return NextResponse.json(
      { character, pairings, complete },
      { status: 200 }
    );
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
