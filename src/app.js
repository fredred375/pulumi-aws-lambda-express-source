"use strict";
const express = require("express");

const app = express();

const router = express.Router();

router
  .get("/", (req, res) => {
    res.send("Hello world!");
  })
  .get("/about", (req, res) => {
    res.send("Hello from about page!");
  });

app.use("/", router);

module.exports = app;
