module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transactions", {
      
      amount: {
        type: Sequelize.INTEGER
      },
      transactiontype: {
        type: Sequelize.ENUM("pending", "paid"),
        defaultValue: "pending",
      },
      party: {
        type: Sequelize.STRING
      }
    });
    return Transaction;
  };