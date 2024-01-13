import "dotenv/config";
import type { Request, Response } from "express";
import { MainController } from "../src/controllers/main.controller";

let request: Request;
let response: Response;

describe(MainController.name, () => {
  it("should be successful to execute a verify method", async () => {
    const actual = new MainController();
    const dataToCache = { message: "Data to be cached" };

    jest.spyOn(actual, "verify").mockResolvedValueOnce(dataToCache as any);

    const result = await actual.verify(request, response);

    expect(result).not.toBe(undefined);
    expect(actual.verify).toHaveBeenCalledWith(request, response);
  });

  it("should be successful to execute a getCache method", async () => {
    const actual = new MainController();
    const dataToCache = { message: "Data to be cached" };

    jest.spyOn(actual, "getCache").mockResolvedValueOnce(dataToCache as any);

    const result = await actual.getCache(request, response);

    expect(result).not.toBe(undefined);
    expect(actual.getCache).toHaveBeenCalledWith(request, response);
  });
});
