const db = require("../models");
const config = require("../config/auth.config");
const Account = db.account;

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a account
    const account = {
        amount: req.body.amount,
        transactiontype: req.body.transactiontype,
        party: req.body.party 
    };
    // Save account in the database
    Account.create(account)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the account."
        });
      });
  };

  exports.findAll = (req, res) => {
    
   
    Account.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving accounts."
        });
      });
  };