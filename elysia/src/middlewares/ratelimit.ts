// src/middlewares/rateLimit.ts

const memoryStore = new Map<string, { count: number; expiresAt: number }>();

export const rateLimit = (maxPerDay = 200) => {
  const duration = 86_400_000; // 1 วันใน milliseconds

  return (ctx: any) => {
    const ip = ctx.request.headers.get("x-forwarded-for") || "local";
    const now = Date.now();
    const key = `ratelimit:${ip}`;
    const record = memoryStore.get(key);

    if (!record || record.expiresAt < now) {
      memoryStore.set(key, { count: 1, expiresAt: now + duration });
    } else {
      if (record.count >= maxPerDay) {
        ctx.set.status = 429;
        return {
          message: "คุณใช้เกิน 200 ครั้งในวันนี้แล้ว กรุณารอพรุ่งนี้ 🙏",
        };
      }
      record.count++;
    }
  };
};
