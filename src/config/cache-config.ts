import { Redis } from "ioredis";

export async function CacheConnection(): Promise<{
  redisClient: Redis;
}> {
  const redisClient = new Redis(
    Number(process.env.CACHE_PORT),
    process.env.CACHE_HOST as string
  );

  return { redisClient };
}
