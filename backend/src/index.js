const express = require("express");

const PORT = 3001;
const app = express();

app.use(require("./router"));

app.listen(PORT, () => {
  console.log(`server online ${PORT} ;-)`);
});
