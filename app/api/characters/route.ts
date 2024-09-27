import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { Pairing, RelValuesForPairings } from "@prisma/client";

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
    const relValuesForPairings: RelValuesForPairings[] = [];
    const characters = await prisma.character.findMany({
      where: {
        chartId: response.chartId,
      },
    });
    const relTypes = await prisma.relType.findMany({
      where: {
        chartId: response.chartId,
      },
    });
    let innerComplete = true;
    const pairingsCompletion = new Promise((resolve) => {
      characters.forEach(async (chara, index, array) => {
        const pairing = await prisma.pairing.create({
          data: {
            name: chara.firstName + character.firstName,
            characterOneId: chara.id,
            characterTwoId: character.id,
            chartId: response.chartId,
          },
        });
        const relValuesForPairingsCompletion: Promise<boolean> = new Promise(
          (resolve) => {
            relTypes.forEach(async (relType, reldex, relray) => {
              const relValuesForPairing =
                await prisma.relValuesForPairings.create({
                  data: {
                    value: 0,
                    pairingId: pairing.id,
                    reltypeId: relType.id,
                  },
                });
              relValuesForPairings.push(relValuesForPairing);
              if (reldex == relray.length - 1) {
                resolve(true);
              }
            });
          }
        );
        innerComplete = innerComplete && (await relValuesForPairingsCompletion);
        pairings.push(pairing);
        if (index == array.length - 1) {
          resolve(innerComplete);
        }
      });
    });
    const complete = await pairingsCompletion;
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
