const express = require("express");
const app = express();
const task = require("./routes/tasks");
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("./db/connect");

app.get("/", (req, res) => {
  res.send("todo app");
});

app.use("/api/v1/tasks", task);
app.listen(5000, console.log("Server is running on port 5000"));
