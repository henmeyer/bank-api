import { Request, Response } from "express";

const getBalance = (req: Request, res: Response) => {
  res.send("Hello World");
};

export default { getBalance };
