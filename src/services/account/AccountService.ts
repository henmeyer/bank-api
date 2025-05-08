import IAccount from "../../interfaces/IAccount";
import Account from "../../models/account";
import accountsState from "../../store/AccountsStore";

/**
 * Get the balance of an account
 * @param id - The ID of the account
 * @returns The balance of the account
 */
const getBalance = (id: string): number | undefined => {
  const account = accountsState.get(id);
  if (!account) {
    return;
  }
  return account.balance;
};

/**
 * Deposit money into an account
 * @param id - The ID of the account
 * @param amount - The amount of money to deposit
 * @returns The updated account
 */
const deposit = (id: string, amount: number): IAccount | undefined => {
  let account = accountsState.get(id);
  if (!account) {
    account = new Account(id);
    accountsState.add(id, account);
  }
  return { destination: account.deposit(amount) };
};

/**
 * Withdraw money from an account
 * @param id - The ID of the account
 * @param amount - The amount of money to withdraw
 * @returns The updated account
 */
const withdraw = (id: string, amount: number): IAccount | undefined => {
  const account = accountsState.get(id);
  if (!account) {
    return;
  }
  return { origin: account.withdraw(amount) };
};

/**
 * Transfer money between two accounts
 * @param origin - The ID of the origin account
 * @param destination - The ID of the destination account
 * @param amount - The amount of money to transfer
 * @returns The updated accounts
 */
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
    destinationAccount = new Account(destination);
    accountsState.add(destination, destinationAccount);
  }
  return {
    origin: originAccount.withdraw(amount),
    destination: destinationAccount.deposit(amount),
  };
};

export default { getBalance, deposit, withdraw, transfer };
