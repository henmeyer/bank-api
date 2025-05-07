import { Request, Response } from "express";

const handleReset = (req: Request, res: Response) => {
  res.send("Hello World");
};

export default { handleReset };
