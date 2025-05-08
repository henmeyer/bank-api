import { Request, Response } from "express";
import accountService from "../services/account/AccountService";

const getBalance = (req: Request, res: Response) => {
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
};

export default { getBalance };
