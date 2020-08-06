const express = require("express");
const app = express();
const router = require("express").Router();
const mysql = require("mysql");

const cors = require("cors");

app.use(express.json());
app.use(cors());

require("dotenv").config;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "my_schema",
  port: "3306",
});

console.log(connection);
connection.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log("you failed");
    throw err;
  }
});

connection.query(
  "CREATE TABLE persons(id INT(255) UNSIGNED AUTO_INCREAMENT PRIMARY KEY , firstname VARCHAR(255) NOT NULL , lastname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL , password VARCHAR(255) NOT NULL ) ",
  (err, rows) => {
    if (err) {
      throw err;
    } else {
      console.log(rows);
    }
  }
);

const port = 4000;
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
