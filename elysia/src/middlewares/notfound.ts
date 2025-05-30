import type { Context } from "elysia";

export interface OnError {
  code: string;
  set: Context["set"];
  request: Request;
  error: any;
}

export const errornotfound = ({ code, set, error }: OnError) => {
  if (code === "NOT_FOUND") {
    set.status = 404;
    return { message: "Path is NotFound" };
  }

  set.status = 500;
  return {
    message: "Unhandled Error",
    error: error instanceof Error ? error.message : String(error),
  };
};
