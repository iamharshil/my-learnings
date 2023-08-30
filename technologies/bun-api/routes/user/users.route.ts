import express, { Request, Response } from "express";

const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
	return res
		.status(200)
		.json({
			success: true,
			message: "Success",
			data: { id: 1, name: "John Doe", email: "johndoe@example.com" },
		});
});

export default userRouter;
