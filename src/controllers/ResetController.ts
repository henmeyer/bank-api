import { Request, Response } from "express";
import resetService from "../services/ResetService";

const handleReset = (req: Request, res: Response) => {
  try {
    resetService.reset();
    res.status(200).send("OK");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export default { handleReset };
