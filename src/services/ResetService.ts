import accountsStore from "../store/AccountsStore";

/**
 * Reset the accounts store
 */
const reset = () => {
  accountsStore.reset();
};

export default { reset };
