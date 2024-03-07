const path = require("path");
const express = require ('express');
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");


const port = process.env.SERVER_PORT ?? 3000


app.use(cors());
const userRoutes = require("./routes/routes");

mongoose
  .connect(
    "mongodb://localhost:27017/"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!", error);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const { error } = require("console");


app.use("/api/models", userRoutes);

app.listen(port, () => {
  console.log(`Node server running at: http://localhost:${port}`)
})

module.exports = app;

