const express = require("express");
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.post('/submit', (req, res) => {
  console.log(req.body.fname);
  console.log(req.body.lname);
  res.json(req.body)
})

app.listen( port, () => {
  console.log(`server listening on port ${port}`);
});
