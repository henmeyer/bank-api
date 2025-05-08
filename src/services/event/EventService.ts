import IAccount from "../../interfaces/IAccount";
import IEvent from "../../interfaces/IEvent";
import accountService from "../account/AccountService";

/**
 * Handle an event
 * @param payload - The event payload
 * @returns The updated account
 */
const handleEvent = (payload: IEvent): IAccount | undefined => {
  validateEvent(payload);

  const { type, origin, destination } = payload;
  const amount = Number(payload.amount);

  const handlers = {
    deposit: () => accountService.deposit(destination, amount),
    withdraw: () => accountService.withdraw(origin, amount),
    transfer: () => accountService.transfer(origin, destination, amount),
  };

  const handler = handlers[type];

  if (!handler) {
    throw new Error("Invalid event type");
  }

  return handler();
};

const validateEvent = (payload: IEvent): void => {
  const { type, origin, destination } = payload;
  const amount = Number(payload.amount);

  if (!type || !amount || (!origin && !destination)) {
    throw new Error("Invalid event payload");
  }

  if (amount <= 0) {
    throw new Error("Amount must be greater than 0");
  }

  if (type === "transfer" && (!origin || !destination)) {
    throw new Error("Origin and destination are required for transfer events");
  }

  if (type === "withdraw" && !origin) {
    throw new Error("Origin is required for withdraw events");
  }

  if (type === "deposit" && !destination) {
    throw new Error("Destination is required for deposit events");
  }
};

export default { handleEvent };
