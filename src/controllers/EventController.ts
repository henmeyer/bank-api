import { Request, Response } from "express";
import EventService from "../services/event/EventService";
import IEvent from "../interfaces/IEvent";

/**
 * Handle an event
 * @param req - The request
 * @param res - The response
 */
const handleEvent = (req: Request, res: Response) => {
  try {
    if (!req.body) {
      res.status(400).send("Bad Request");
      return;
    }
    const payload = req.body as IEvent;

    const result = EventService.handleEvent(payload);

    if (!result) {
      res.status(404).send("0");
      return;
    }

    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export default { handleEvent };
