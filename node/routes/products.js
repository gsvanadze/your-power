const rootDir = require("../util/path");

const express = require("express");

const productsRouter = express.Router();

const path = require("path");

const filePath = path.join(rootDir, "db-base/products.db.json");

const fileReader = require('../shared/tools')

productsRouter.get('/getAllProducts', (req, res) => {
  const delay = 2000; // delay in milliseconds (2000ms = 2 seconds)
 fileReader(filePath,(err,data)=>{
   setTimeout(()=>{
     res.send(data)
   },delay)

 })
});

module.exports = productsRouter;
