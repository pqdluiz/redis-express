import cors from "cors";
import "dotenv/config";
import express from "express";
import { CacheConnection } from "./config";
import { router } from "./routes";

const app = express();
const port = process.env.PORT;

CacheConnection()
  .then(() => {
    app.use(express.json());
    app.use(cors());
    app.use(router);

    app.listen(port, () => {
      console.log(`Server running to port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

export { app };
