const express = require("express");

const routes = express.Router();

const TweetControllers = require("./controllers/tweetControllers");

routes.get("/tweets", TweetControllers.index);
routes.post("/tweet", TweetControllers.store);

module.exports = routes;
