const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3001;
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(bodyParser.json());
app.use(require("./router"));
app.use(cors());

server.listen(PORT, () => {
  console.log(`server online ${PORT} ;-)`);
});
