import type { Context } from "elysia";

export interface registerType {
  status: (code: number, body: any) => any;
  body: {
    phone: string | number;
    password: string;
  };
}

export interface forlogin {
  jwt: {
    sign: (payload: any) => Promise<string>;
  };
  refreshJwt: {
    sign: (payload: any) => Promise<string>;
  };
  status: (code: number, body: string | number | object) => any;
  body: string | number;
}

export interface RefreshTokenContext {
  jwt: {
    sign: (payload: any) => Promise<string>;
  };
  refreshJwt: {
    sign: (payload: any) => Promise<string>;
    verify: (token: string) => Promise<any>;
  };
  request: Request;
  set: Context["set"];
}

export interface datauser {
  status: (code: number, body: string | number | object) => any;
}
