const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();

//const mysql = require("mysql2");
/*
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"world"
});
*/

const db = require("./models");

const { User } = require("./models");

app.get("/select", (req, res) => {
  User.findAll({ where: { firstName: "pedro" } })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });

  //res.end("select page");
});

app.get("/insert", (req, res) => {
  User.create({
    firstName: "john",
    age: "45",
  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send("inser page");
});

app.get("/delete", (req, res) => {
  User.destroy({ where: { id: 11 } });

  res.end("delete");
});

db.sequelize.sync().then((req) => {
  app.listen(4040, () => {
    console.log("server running");
  });
});
