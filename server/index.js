require("dotenv").config();

const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = process.env.port || 3001,
  app = express(),
  mongoose = require("mongoose"),
  routes = require("./routes");

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => console.log("Connected to MongoDb"))
  .catch(err => console.log("Error connecting to MongoDb: " + err));

app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static(__dirname));

routes(app);

app.listen(port, () => {
  console.log("Server listening on port", port);
});
