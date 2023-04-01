const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "PATCH", "POST", "DELETE", "PUT"],
    credentials: true,
  }),
);

app.use("/", routes);

module.exports = app;
