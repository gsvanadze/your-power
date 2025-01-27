const express = require("express");

const authRouter = express.Router();

const path = require("path");

const rootDir = require("../util/path");

const filePath = path.join(rootDir, "db-base/auth.db.json");

const fileReader = require('../shared/tools');

const fs = require('fs');

// Registration

authRouter.post('/registerUser', (req, res) => {
  const requestData = req.body;

  fileReader(filePath, (err, data) => {
    if (err) {
      return res.status(500).send({error: 'Error reading file'});
    }

    let usersList = data.usersList || [];
    const isUserExists = usersList.some((user) => user.userName === requestData.userName);

    if (isUserExists) {
      return res.status(400).send({error: 'User already exists'});
    }

    usersList = [...usersList, requestData];

    fs.writeFile(filePath, JSON.stringify({usersList: usersList}), (err) => {
      if (err) {
        return res.status(500).send({error: 'Error writing to file'});
      }
      usersList = []
      res.status(201).send({message: 'User registered successfully'});


    });
  });
});

//Authorization

authRouter.post('/authUser',(req,res)=>{
  const requestData = req.body;
  fileReader(filePath, (err, data) => {

    if (err){
      return res.status(500).send({error:'Error Reading to file'})
    }

    let usersList = data.usersList || [];
    const isUserExists = usersList.find((user) => user.userName === requestData.userName && user.password === requestData.password);

    setTimeout(() => {

      if (isUserExists) {
        return res.status(200).send({ user: isUserExists });
      }

      return res.status(400).send({ error: 'User does not exist' });

    }, 2000);
  })
})






module.exports = authRouter
