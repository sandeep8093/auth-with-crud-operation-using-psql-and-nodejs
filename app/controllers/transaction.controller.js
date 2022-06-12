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
    let userId=req.userId;
    // Create a transaction
    const transaction = {
        amount: req.body.amount,
        transactiontype: req.body.transactiontype,
        party: req.body.party,
        userId:userId 
    };
    // Save transaction in the database
    var data=await Transaction.create(transaction)
       res.send(data);
  
    }catch(err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the transaction."
        });
  };
};

  exports.findAll = async(req, res) => {
  try{  
  
    let userId =req.userId
   
   var data= await Transaction.findAll({where:{userId:userId}})
        res.send(data);
    
    }catch(err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving transactions."
        });
      }
  };