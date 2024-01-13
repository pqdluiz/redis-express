import cors from "cors";
import "dotenv/config";
import express from "express";
import { CacheConnection } from "./config";
import { router } from "./routes";

CacheConnection();

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server running to port http://localhost:${port}`);
});

export { app };
