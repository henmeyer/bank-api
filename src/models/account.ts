import IAccount from "../interfaces/IAccount";

/**
 * Represents an account with an ID and a balance
 */
class Account implements IAccount {
  private _id: string;
  private _balance: number = 0;
  private _specialCheck: number = 0;

  constructor(id: string, specialCheck: number = 0) {
    this._id = id;
    this._specialCheck = specialCheck;
  }

  /**
   * Get the balance of the account
   * @returns The balance of the account
   */
  get balance() {
    return this._balance;
  }

  /**
   * Deposit money into the account
   * @param amount - The amount of money to deposit
   * @returns The updated account
   */
  deposit = (amount: number) => {
    this._balance = this._balance + amount;
    return { id: this._id, balance: this._balance };
  };

  /**
   * Withdraw money from the account
   * @param amount - The amount of money to withdraw
   * @returns The updated account
   */
  withdraw = (amount: number) => {
    if (!this.hasEnoughBalance(amount)) {
      throw new Error("Insufficient balance");
    }
    this._balance = this._balance - amount;
    return { id: this._id, balance: this._balance };
  };

  /**
   * Check if the account has enough balance
   * @param amount - The amount of money to check
   * @returns True if the account has enough balance, false otherwise
   */
  private hasEnoughBalance(amount: number) {
    return this._balance + this._specialCheck >= amount;
  }
}

export default Account;
