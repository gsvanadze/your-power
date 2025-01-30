const rootDir = require("../util/path");

const express = require("express");

const productsRouter = express.Router();

const path = require("path");

const filePath = path.join(rootDir, "db-base/products.db.json");

const fileReader = require('../shared/tools')

// productsRouter.get('/getAllProducts', (req, res) => {
//   const delay = 2000; // delay in milliseconds (2000ms = 2 seconds)
//   fileReader(filePath, (err, data) => {
//     setTimeout(() => {
//       res.send(data)
//     }, delay)
//
//   })
// });


productsRouter.get('/getProductsByCategory', (req, res) => {

  const delay = 2000; // delay in milliseconds (2000ms = 2 seconds)

  const productType = req.query.productType;

  const categoryType = req.query.categoryType;

  if (productType || categoryType){

    fileReader(filePath, (err, data) => {

      let filteredData = data.productsList.filter((_) => {

        return productType ? _.type === productType : _.categoryType === categoryType;

      })
      setTimeout(() => {

        res.send(filteredData)

      }, delay)
    })
  }else res.status(400).send('Wrong EndPoint')


});


productsRouter.get('/products', (req, res) => {

  const delay = 2000; // delay in milliseconds (2000ms = 2 seconds)

  const searchName = req.query.searchName;


  if (searchName !== undefined){

    fileReader(filePath, (err, data) => {

      let filteredData = data.productsList.filter((_) => {

        return _.productName.toUpperCase().startsWith(searchName.toUpperCase())
      })

      setTimeout(() => {

        res.send(searchName?filteredData:data.productsList)

      }, delay)
    })
  }else res.status(400).send('Wrong EndPoint')


});

module.exports = productsRouter;
