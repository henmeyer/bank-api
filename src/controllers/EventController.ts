import { Request, Response } from "express";

const handleEvent = (req: Request, res: Response) => {
  res.send("Hello World");
};

export default { handleEvent };
