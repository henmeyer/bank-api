import Account from "../models/account";

/**
 * The accounts store
 */
const accounts: Map<string, Account> = new Map();

/**
 * Get an account by ID
 * @param id - The ID of the account
 * @returns The account
 */
const get = (id: string) => {
  return accounts.get(id);
};

/**
 * Add an account to the store
 * @param id - The ID of the account
 * @param account - The account
 */
const add = (id: string, account: Account) => {
  accounts.set(id, account);
};

/**
 * Reset the store
 */
const reset = () => {
  accounts.clear();
};

export default { get, add, reset };
