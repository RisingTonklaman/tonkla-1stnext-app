export const authenticate = async ({
  jwt,
  request,
  set,
  cookie: { id },
}: any) => {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) {
    set.status = 401;
    return { message: "Missing refresh token" };
  }

  const data = await jwt.verify(token);

  if (!data) {
    set.status = 401;
    return { message: "Invalid or expired token" };
  }

  id.value = data.user.id;
  id.maxAge = 1000 * 60 * 13;
  console.log(id.value);

  // สามารถเพิ่ม data (payload JWT) เข้า context เพื่อให้ route ใช้ต่อได้ เช่น return { userId: data.userId }
};
