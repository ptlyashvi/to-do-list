import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";

import mongoose from "mongoose";
import Routes from "./routes/route.js";

Connection();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", Routes);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.models.User || mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login success", user });
      } else {
        res.send({ message: "pass wrong" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "user already there" });
      //console.log(user)
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: " registred" });
        }
      });
      // console.log("neww")
    }
  });
});

app.listen(Number(process.env.PORT), () => {
  console.log(`BE started at port ${process.env.BASE_URL}/`);
});
