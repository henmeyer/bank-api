import IAccount from "../interfaces/IAccount";

class Account implements IAccount {
  private _id: string;
  private _balance: number;

  constructor(id: string, balance: number) {
    this._id = id;
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  deposit = (amount: number) => {
    this._balance = this._balance + amount;
    return { id: this._id, balance: this._balance };
  };

  withdraw = (amount: number) => {
    this._balance = this._balance - amount;
    return { id: this._id, balance: this._balance };
  };
}

export default Account;
