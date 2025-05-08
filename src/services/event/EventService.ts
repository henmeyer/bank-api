import IAccount from "../../interfaces/IAccount";
import IEvent from "../../interfaces/IEvent";
import accountService from "../account/AccountService";

const handleEvent = (payload: IEvent): IAccount | undefined => {
  const { type, origin, destination, amount } = payload;

  switch (type) {
    case "deposit":
      return accountService.deposit(destination, amount);
    case "withdraw":
      return accountService.withdraw(origin, amount);
    case "transfer":
      return accountService.transfer(origin, destination, amount);
    default:
      throw new Error("Invalid event type");
  }
};

export default { handleEvent };
