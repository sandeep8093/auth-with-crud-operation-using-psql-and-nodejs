const { authJwt } = require("../middleware");
const transactions = require("../controllers/transaction.controller.js");

    
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/api/transaction/all",[authJwt.verifyToken],transactions.findAll);
  app.post(
    "/api/transaction/create",
    [authJwt.verifyToken],
    transactions.create
  );
  
};