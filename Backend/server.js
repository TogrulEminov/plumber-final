const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();
mongoose.set("strictQuery", false);
const { Schema } = mongoose;

const newShema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
    },
    price: {
      type: Number,
    }
  },
  { timestamp: true }
);

const Card = mongoose.model("card", newShema);

//! get data
app.get("/card", (req, res) => {
  Card.find({}, (err, doc) => {
    if (!err) {
      res.send(doc);
    }
  });
});
//! get data id
app.get("/card/:id", (req, res) => {
  const { id } = req.params;
  Card.findById(id, (err, doc) => {
    if (!err) {
      res.send(doc);
    }
  });
});

// ?post data
app.post("/card", (req, res) => {
  let newCard = new Card({
    name: req.body.name,
    description: req.body.description,
    url: req.body.url,
    price: req.body.price,
  });
  newCard.save();
  res.send("post is succes");
});
// ? delete by id
app.delete("/card/:id", (req, res) => {
  const { id } = req.params;
  Card.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.send("delete is succes");
    }
  });
});

const PORT = process.env.PORT;
const DB = process.env.URL.replace("<password>", process.env.PASSWORD);

mongoose.connect(DB, () => {
  console.log("DB IS CONNECT");
  app.listen(PORT, () => {
    console.log(`Server is up and running ${PORT}`);
  });
});
