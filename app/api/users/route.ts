import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import bcrypt from "bcrypt";

export async function GET(request: NextRequest) {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const response = await request.json();
    if (response.username.length < 8) {
      return NextResponse.json(
        { message: "Username must be at least 8 characters." },
        { status: 400 }
      );
    } else if (response.username.length > 32) {
      return NextResponse.json(
        { message: "Username must be at most 32 characters." },
        { status: 400 }
      );
    } else if (response.password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters." },
        { status: 400 }
      );
    } else if (response.password.length > 32) {
      return NextResponse.json(
        { message: "Password must be at most 32 characters." },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(response.password, 10);
    try {
      const userExists = await prisma.user.findFirstOrThrow({
        where: {
          username: response.username,
        },
      });
      return NextResponse.json(
        { message: "User with this username already exists." },
        { status: 400 }
      );
    } catch (error) {
      const user = await prisma.user.create({
        data: {
          username: response.username,
          password: hashedPassword,
        },
      });
      return NextResponse.json({ user }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const users = await prisma.user.deleteMany();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
