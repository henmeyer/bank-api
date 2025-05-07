const balances: Record<string, number> = {};

const getBalance = (accountId: string) => {
  return balances[accountId];
};

const depositBalance = (accountId: string, amount: number) => {
  balances[accountId] = balances[accountId] + amount;
};

const withdrawBalance = (accountId: string, amount: number) => {
  balances[accountId] = balances[accountId] - amount;
};

export default { getBalance, depositBalance, withdrawBalance };
