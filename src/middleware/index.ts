import type { NextFunction, Request, Response } from "express";
import { CacheConnection } from "../config";

export const checkCache = async (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response<any, Record<string, any>> | undefined> => {
  const { redisClient } = await CacheConnection();
  const cachedData = await redisClient.get("cachedData");

  if (cachedData !== null) {
    return response.send(JSON.parse(cachedData));
  } else {
    next(); // Continue to the route handler if data is not in the cache
  }
};
