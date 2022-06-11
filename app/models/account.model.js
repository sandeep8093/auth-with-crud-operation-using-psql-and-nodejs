module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("accounts", {
       
      amount: {
        type: Sequelize.STRING
      },
      transactiontype: {
        type: Sequelize.STRING
      },
      party: {
        type: Sequelize.STRING
      }
    });
    return Account;
  };