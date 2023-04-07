const express = require("express");
const { UserModel } = require("../models/userModel");

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  const { username } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      res.send(user);
    } else {
      res.status(400).send("User does not exist");
    }
  } catch (error) {
    res.status(401).send(error.message);
  }
});

userRouter.post("/newUser", async (req, res) => {
  const { username } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      res.status(400).send("Username Exists");
    } else {
      const newUser = new UserModel({ username, bestScore: 0 });
      await newUser.save();
      res.send(newUser);
    }
  } catch (error) {
    res.status(401).send(error.message);
  }
});

userRouter.get("/leaderboard", async (req, res) => {
  try {
    const users = await UserModel.find();
    users.sort((a, b) => {
      return b.bestScore - a.bestScore;
    });
    res.send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = { userRouter };
