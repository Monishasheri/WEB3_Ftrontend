const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join("views"));
app.set("view engine", "ejs");

const router = require("./routes/routes");

const port = 3000;

app.listen(port, () => {
  console.log("server is ready on port", port);
});
app.use("/", router);
