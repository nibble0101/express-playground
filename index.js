const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ port });
});

app.listen( port, () => {
  console.log(`server listening on port ${port}`);
});
