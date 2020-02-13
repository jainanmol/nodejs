const express = require("express");
const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, name: "john" },
    { id: 2, name: "Ani" },
    { id: 3, name: "Backer" }
  ];

  res.json({
    success: 1,
    list: customers
  });
});
