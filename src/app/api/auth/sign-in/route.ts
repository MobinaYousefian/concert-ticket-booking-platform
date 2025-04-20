import { NextResponse } from "next/server";

import { SignInDto } from "@/dto/auth.dto";

import prisma from "@/lib/prisma";

import { ApiResponseType } from "@/types/api-response.type";

import { parseBody, wrapWithTryCatch } from "@/utils/api.utils";

export async function POST(request: Request): Promise<ApiResponseType<null>> {
  return wrapWithTryCatch(async () => {
    const [parseError, body] = await parseBody<SignInDto>(request);

    if (parseError !== null) {
      return NextResponse.json({ error: parseError }, { status: 400 });
    }

    const foundUser = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (!foundUser || body.password !== foundUser.password) {
      return NextResponse.json(
        { error: "نام کاربری یا رمز عبور اشتباه است" },
        { status: 400 },
      );
    }

    return NextResponse.json({ data: null }, { status: 200 });
  });
}
