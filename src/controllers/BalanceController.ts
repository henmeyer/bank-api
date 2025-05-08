import { Request, Response } from "express";
import accountService from "../services/account/AccountService";

/**
 * Get the balance of an account
 * @param req - The request
 * @param res - The response
 */
const getBalance = (req: Request, res: Response) => {
  try {
    const { account_id: id } = req.query as { account_id: string };

    if (!id) {
      res.status(400).send("account_id is required");
      return;
    }

    const balance = accountService.getBalance(id);

    if (!balance) {
      res.status(404).send("0");
      return;
    }

    res.status(200).send(balance);
  } catch (error: any) {
    console.error(error);
    res.status(400).send(error.message || "Bad Request");
  }
};

export default { getBalance };
