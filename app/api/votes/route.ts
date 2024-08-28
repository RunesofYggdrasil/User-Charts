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
    }
    return NextResponse.json({ response: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
