import { Elysia } from "elysia";
import {
  login,
  register,
  refreshToken,
  getUsers,
  findUser,
} from "../controllers/users.controller";
import { authenticate } from "../middlewares/authenticate";

const subRouter = new Elysia({ prefix: "/api/v1/user" })
  .post("/register", register)
  .post("/login", login)
  .post("/refresh", refreshToken)
  .get("/fordatauser", getUsers, {
    beforeHandle: [authenticate],
  })
  .get("/findUser/:phone", findUser);

export const userRoute = new Elysia().use(subRouter);
