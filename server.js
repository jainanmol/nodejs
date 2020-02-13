const express = require("express");
const app = express();
const path = require("path");
const port = 5001;

app.get("/api/customers", (req, res) => {
  // console.log(req);
  const customers = [
    { id: 1, name: "john" },
    { id: 2, name: "Ani" },
    { id: 3, name: "Backer" }
  ];

  // res.json(customers);
  res.json({
    success: 1,
    list: customers
  });
});
app.use(express.static("build"));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "build", "index.html"));
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () => console.log(`Server started on ${port}`));
