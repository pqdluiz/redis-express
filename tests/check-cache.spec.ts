import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { checkCache } from "../src/middleware";

let request: Request;
let response: Response;
let nextFunction: NextFunction;

describe(checkCache.name, () => {
  it("should be successful to execute method for check cache in the redis connected", () => {
    const actual = checkCache(request, response, nextFunction);

    expect(actual).not.toBe(undefined);
  });
});
