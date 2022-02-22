const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONOGO_URI);
    app.listen(5000, () => console.log("server is connected...."));
  } catch (err) {
    console.log(err);
  }
};

start();
