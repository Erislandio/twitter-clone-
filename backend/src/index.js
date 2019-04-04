const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3001;
const app = express();

app.use(bodyParser.json());
app.use(require("./router"));

app.listen(PORT, () => {
  console.log(`server online ${PORT} ;-)`);
});
