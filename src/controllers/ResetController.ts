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
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export default { handleReset };
