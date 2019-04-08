const express = require("express");

const routes = express.Router();

const TweetControllers = require("./controllers/tweetControllers");
const LinkControllers = require("./controllers/LikeControllers");

routes.get("/tweets", TweetControllers.index);
routes.post("/tweet", TweetControllers.store);
routes.post("/likes/:id", LinkControllers.store);

module.exports = routes;
