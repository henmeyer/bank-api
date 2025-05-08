import { Request, Response } from "express";
import resetService from "../services/ResetService";

/**
 * Handle a reset request
 * @param req - The request
 * @param res - The response
 */
const handleReset = (req: Request, res: Response) => {
  try {
    resetService.reset();
    res.status(200).send("OK");
  } catch (error: any) {
    console.error(error);
    res.status(400).send(error.message || "Bad Request");
  }
};

export default { handleReset };
