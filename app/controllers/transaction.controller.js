const db = require("../models");
const Transaction = db.transaction;

exports.create = async(req, res) => {
   
  try{
  // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    let userId=req.user.id;
    // Create a transaction
    const transaction = {
        amount: req.body.amount,
        transactiontype: req.body.transactiontype,
        party: req.body.party,
        userId:userId 
    };
    // Save transaction in the database
    await Transaction.create(transaction)
      .then(data => {
        res.send(data);
      })
    }catch(err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the transaction."
        });
  };
};

  exports.findAll = async(req, res) => {
  try{  
    console.log(id)
    let userId =req.user.id
   
    await Transaction.findAll({where:{userId:userId}})
      .then(data => {
        res.send(data);
      })
    }catch(err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving transactions."
        });
      }
  };