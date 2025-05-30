import { InternalServerError } from "elysia";
import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();
import { loginSchema } from "../validate/user-validate";
import { z } from "zod";
import bcrypt from "bcrypt";
import dayjs from "dayjs";
import type {
  registerType,
  forlogin,
  RefreshTokenContext,
  datauser,
} from "../types/types.user";

export const register = async ({ status, body }: registerType) => {
  try {
    const data = loginSchema.parse(body);

    const password = bcrypt.hashSync(data.password, 10);

    const createUser: any = await prisma.user.create({
      data: {
        phone: data.phone,
        password,
      },
    });

    delete createUser.password;
    return status(200, createUser);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return status(500, {
        message: error.issues,
      });
    }
    console.log(error);
    throw new InternalServerError();
  }
};

export const login = async ({ jwt, refreshJwt, status, body, cookie: { refreshTokenOnServer } }: any) => {
  try {
    const data = loginSchema.parse(body);

    const findPhone: any = await prisma.user.findUnique({
      where: {
        phone: data.phone,
      },
    }); // หา

    if (!findPhone) {
      return status(500, { message: "user is not found" });
    } // หาไม่เจอ

    const validPassword = bcrypt.compareSync(data.password, findPhone.password); // เจอ

    if (!validPassword) {
      return status(500, { message: "password is not match" });
    } // password ผิด
    delete findPhone.password;
    const accessToken = await jwt.sign({ user: findPhone }); // 1m local
    const refreshToken = await refreshJwt.sign({ user: findPhone }); // 3m

    await prisma.refresh_token.create({
      data: {
        token: refreshToken, // cookie
        userId: findPhone.id,
        expiresAt: dayjs().add(3, "minute").toDate(), // + 3m
      },
    });

    refreshTokenOnServer.value = refreshToken;
    refreshTokenOnServer.maxAge = 1000 * 60 ;

    

    return status(200, {
      message: "Login successfully",
      accessToken: accessToken,
      refreshToken: refreshToken,
      data: findPhone,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return status(500, {
        message: error.issues,
      });
    }
    console.log(error);
    throw new InternalServerError();
  }
};

export const refreshToken = async ({
  jwt,
  refreshJwt,
  request,
  set,
  cookie: { refreshTokenOnServer },
}: any) => {
  //const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (!refreshTokenOnServer.value) {
    set.status = 401;
    return { message: "Missing refresh token" };
  }

  const findRefreshToken = await prisma.refresh_token.findFirst({
    where: {
      token : refreshTokenOnServer.value,
    },
  });

  if (!findRefreshToken) {
    set.status = 401;
    return { message: "Invalid refresh token" };
  }

  if (findRefreshToken.revoked) {
    set.status = 401;
    return { message: "Refresh token has been revoked" };
  }

  if (findRefreshToken.expiresAt < new Date()) {
    set.status = 401;
    return { message: "Refresh token expired" };
  }

  const data = await refreshJwt.verify(findRefreshToken.token);

  const profile = await prisma.user.findFirst({
    where: {
      id: data.user.id,
    },
  });

  const newAccessToken = await jwt.sign({ user: profile });

  return { newAccessToken };
};

export const getUsers = async ({ status, set, cookie: { id } }: any) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: id.value,
      },
    });

    set.status = 200;

    return { data: user };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return status(500, {
        message: error.issues,
      });
    }
    console.log(error);
    throw new InternalServerError();
  }
};

export const findUser = async ({ params, set }: any) => {
  const { phone } = params;

  const user = await prisma.user.findUnique({
    where: {
      phone,
    },
  });

  if (!user) {
    set.status = 404;
    return {
      message: "user not found",
    };
  }

  set.status = 200;
  return {
    message: "user found",
  };
};
