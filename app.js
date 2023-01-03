const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const mongoose = require("mongoose");
var router = require("express").Router();
const { search, findAll, findSearchByHours } = require("./controller");

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/backend-local");
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

router.post("/search", search);

router.get("/list", findAll);
router.get("/list/hours", findSearchByHours);

app.use("/api", router);

app.listen(8080, () => {
  console.log("server is started");
});
