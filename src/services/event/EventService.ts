import IAccount from "../../interfaces/IAccount";
import IEvent from "../../interfaces/IEvent";
import accountService from "../account/AccountService";

/**
 * Handle an event
 * @param payload - The event payload
 * @returns The updated account
 */
const handleEvent = (payload: IEvent): IAccount | undefined => {
  const { type, origin, destination, amount } = payload;

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

export default { handleEvent };
