import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function PUT(request: NextRequest) {
  try {
    const response = await request.json();
    const votes = response.votes;
    for (let vote = 0; vote < votes.length; vote++) {
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
    }
    return NextResponse.json({ response: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
