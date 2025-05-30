import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import { rateLimit } from "./middlewares/ratelimit";
import { cors } from "@elysiajs/cors";
import { logger } from "@grotto/logysia";
import { userRoute } from "./routes/user.route";
import { errornotfound } from "./middlewares/notfound";
import { jwt } from "@elysiajs/jwt";
const app = new Elysia({
  adapter: node(),
  cookie: {
    secrets: process.env.COOKIE_TOKEN_SECRET,
  },
})
  .onBeforeHandle(rateLimit(200))
  .use(cors())
  .use(logger())
  .use(
    jwt({
      name: "jwt",
      secret: process.env.KEY_ACCESS_TOKEN?.toString() || "",
      exp: process.env.REFRESH_TOKEN_EXP,
    })
  )
  .use(
    jwt({
      name: "refreshJwt",
      secret: process.env.KEY_REFRESH_TOKEN?.toString() || "",
      exp: process.env.REFRESH_TOKEN_EXP,
    })
  )
  .use(userRoute)
  .onError(errornotfound as any)
  .listen(3003, ({ hostname, port }) => {
    console.log(`🦊 Elysia is running at ${hostname}:${port}`);
  });
