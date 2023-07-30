const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());

app.get("/", (req, res) => {
  res.send("PC Shop server is running");
});

app.listen(port, () => {
  console.log(`PC Shop server running on ${port}`);
});
