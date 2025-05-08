import accountsStore from "../store/AccountsStore";

const reset = () => {
  accountsStore.reset();
};

export default { reset };
