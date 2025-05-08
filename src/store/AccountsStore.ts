import Account from "../models/account";

const accounts: Map<string, Account> = new Map();

const get = (id: string) => {
  return accounts.get(id);
};

const add = (id: string, account: Account) => {
  accounts.set(id, account);
};

const reset = () => {
  accounts.clear();
};

export default { get, add, reset };
