import "dotenv/config";
import { RedisOptions } from "ioredis";
import { CacheConnection } from "../src/config";

const redisOptions: RedisOptions = {
  port: Number(process.env.CACHE_PORT),
  host: process.env.CACHE_HOST as string,
};

describe(CacheConnection.name, () => {
  it("should be successful to connect in redis", async () => {
    const { redisClient } = await CacheConnection();

    expect(redisClient.options.port).toBe(redisOptions.port);
    expect(redisClient.options.host).toBe(redisOptions.host);
    expect(redisClient.options.host).not.toBe(undefined);
    expect(redisClient.options.port).not.toBe(undefined);

    expect(redisClient).not.toBe(undefined);
  });
});
