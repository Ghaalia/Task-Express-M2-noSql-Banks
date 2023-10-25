let accounts = require("../../accounts");
const Account = require("../../modal/Account");

exports.accountCreate = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    return res.status(201).json(newAccount);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.accountDelete = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.deleteOne();
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "Account doesn't exist" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.accountUpdate = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.updateOne(req.body);
      return res.status(204).end();
    } else {
      return res.status(404).json({ msg: "Account doesn't exist" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.accountsGet = async (req, res) => {
  try {
    const accounts = await Account.find();
    return res.status(200).json(accounts);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.getAccountByUsername = (req, res) => {
  const { username } = req.params;
  const foundAccount = accounts.find(
    (account) => account.username === username
  );
  if (req.query.currency === "usd") {
    const accountInUsd = { ...foundAccount, funds: foundAccount.funds * 3.31 };
    return res.status(201).json(accountInUsd);
  }
  return res.status(201).json(foundAccount);
};
