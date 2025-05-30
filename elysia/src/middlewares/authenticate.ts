export const authenticate = async ({
  jwt,
  request,
  set,
  cookie: { id },
}: any) => {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) {
    set.status = 401;
    return { message: "Missing accesstoken" };
  }

  const data = await jwt.verify(token);

  if (!data) {
    set.status = 401;
    return { message: "Invalid or expired token" };
  }

  if (data && data.exp * 1000 < Date.now()) {
    set.status = 401;
    return { message: "Token expired" };
  }

  id.value = data.user.id;
  id.maxAge = 1000 * 60 * 13;
  console.log(id.value);
};
