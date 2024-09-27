import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function PUT(request: NextRequest) {
  try {
    const response = await request.json();
    const votes = response.votes;
    const voteCompletion = new Promise(async (resolve) => {
      for (let vote = 0; vote < votes.length; vote++) {
        try {
          const pairing = await prisma.pairing.findFirstOrThrow({
            where: {
              characterOneId: votes[vote].characterOneId,
              characterTwoId: votes[vote].characterTwoId,
            },
          });
          const relValueForPairing =
            await prisma.relValuesForPairings.findFirstOrThrow({
              where: {
                pairingId: pairing.id,
                reltypeId: votes[vote].reltypeId,
              },
            });
          const relValueForPairings = await prisma.relValuesForPairings.update({
            data: {
              value: relValueForPairing.value + 1,
            },
            where: {
              id: relValueForPairing.id,
            },
          });
        } catch (error) {
          console.log("No Ship Selected for Pairing");
        }
        if (vote == votes.length - 1) {
          resolve(true);
        }
      }
    });
    const complete = await voteCompletion;
    return NextResponse.json({ complete }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const relValueForPairings = await prisma.relValuesForPairings.updateMany({
      data: {
        value: 0,
      },
    });
    return NextResponse.json({ relValueForPairings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
