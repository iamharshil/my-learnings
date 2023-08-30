import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";

dotenv.config();
const app: Express = express();
const PORT: string | undefined = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(morgan(":method :url :status - :response-time ms")); // tiny dev combined common short or custom

console.log("Starting main thread");
app.use("/api/v1", router);

app.listen(PORT, () => {
	console.log(`Server is running on ${process.env.HOST}`);
});
