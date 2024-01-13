import request from "supertest";
import { app } from "../src/server";

describe("Express App", () => {
  it("caches data when accessing the /veridy route", async () => {
    const response = await request(app).get("/verify");
    expect(response.status).toBe(200);
  });

  it("caches data when accessing the /cache route", async () => {
    const response1 = await request(app).get("/cache");
    expect(response1.status).toBe(200);

    const response2 = await request(app).get("/cache");
    expect(response2.status).toBe(200);
    expect(response2.body).toEqual(response1.body);
  });
});
