import { Elysia } from "elysia";
import {
  login,
  register,
  refreshToken,
  getUsers,
} from "../controllers/users.controller";
import { authenticate } from "../middlewares/authenticate";

const subRouter = new Elysia({ prefix: "/api/v1/user" })
  .post("/register", register)
  .post("/login", login)
  .post("/refresh", refreshToken)
  .get("/fordatauser", getUsers, {
    beforeHandle: [authenticate],
  });

export const userRoute = new Elysia().use(subRouter);
