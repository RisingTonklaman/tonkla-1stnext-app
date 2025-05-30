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
      secret:  "asdasd",
      exp: "30s",
    })
  )
  .use(
    jwt({
      name: "refreshJwt",
      secret:  "asdasd",
      exp: "1m",
    })
  )
  .use(userRoute)
  .onError(errornotfound as any)
  .listen(3003, ({ hostname, port }) => {
    console.log(`🦊 Elysia is running at ${hostname}:${port}`);
  });
