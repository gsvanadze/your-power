const express = require('express');

const appRouter = express.Router();

const productsRouter = require('./products');

const authRouter = require('./auth');


appRouter.use('/products', productsRouter);

appRouter.use('/auth', authRouter);

module.exports = appRouter;
