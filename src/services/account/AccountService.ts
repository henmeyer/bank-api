import IAccount from "../../interfaces/IAccount";
import Account from "../../models/account";
import accountsState from "../../store/AccountsStore";

const getBalance = (id: string): number | undefined => {
  const account = accountsState.get(id);
  if (!account) {
    return;
  }
  return account.balance;
};

const deposit = (id: string, amount: number): IAccount | undefined => {
  let account = accountsState.get(id);
  if (!account) {
    account = new Account(id, 0);
    accountsState.add(id, account);
  }
  return { destination: account.deposit(amount) };
};

const withdraw = (id: string, amount: number): IAccount | undefined => {
  const account = accountsState.get(id);
  if (!account) {
    return;
  }
  return { origin: account.withdraw(amount) };
};

const transfer = (
  origin: string,
  destination: string,
  amount: number
): IAccount | undefined => {
  const originAccount = accountsState.get(origin);
  let destinationAccount = accountsState.get(destination);
  if (!originAccount) {
    return;
  }
  if (!destinationAccount) {
    destinationAccount = new Account(destination, 0);
    accountsState.add(destination, destinationAccount);
  }
  return {
    origin: originAccount.withdraw(amount),
    destination: destinationAccount.deposit(amount),
  };
};

export default { getBalance, deposit, withdraw, transfer };
