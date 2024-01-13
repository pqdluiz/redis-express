import { Request, Response } from "express";
import { CacheConnection } from "../config";

export class MainController {
  public async getCache(request: Request, response: Response) {
    const { redisClient } = await CacheConnection();
    const cachedData = await redisClient.get("cachedData");

    if (cachedData) {
      // If data exists in the cache, return it
      return response.send(JSON.parse(cachedData));
    } else {
      // If data is not in the cache, fetch it from the source
      const dataToCache = { message: "Data to be cached" };

      await redisClient.set(
        "cachedData",
        JSON.stringify(dataToCache),
        "EX",
        3600
      ); // Cache for 1 hour

      return response.send(dataToCache);
    }
  }

  public async verify(request: Request, response: Response) {
    const { redisClient } = await CacheConnection();

    const dataToCache = { message: "Data to be cached" };
    await redisClient.set(
      "cachedData",
      JSON.stringify(dataToCache),
      "EX",
      3600
    ); // Cache for 1 hour

    return response.send(dataToCache);
  }
}
