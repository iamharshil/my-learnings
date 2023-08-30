import express, { Request, Response } from "express";
import userRouter from "./user/users.route";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
	return res.status(200).json({ success: true, message: "Welcome to API." });
});

router.use("/users", userRouter);

export default router;
