const express = require("express");
const PORT = 3001;
const app = express();

app.get("/", (req, res) => {
  return res.send("Ok");
});

app.listen(PORT, () => {
  console.log(`server online ${PORT}`);
});
