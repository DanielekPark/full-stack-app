const cors = require("cors");
const config = require("config");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const users = require("./routes/userRoute");
const courses = require("./routes/courseRoute");

require("dotenv").config();

mongoose
  .connect("mongodb://localhost:27017/fsa-restapi")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(cors());
app.use(express.json());
app.use("/api/users", users);
app.use("/api/courses", courses);
app.use("/", (req, res, next) => res.send("Hello World!"));
// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

if (!process.env.JWT_KEY) {
  console.error("FATAL ERROR: JWT_KEY is not defined.");
  process.exit(1);
}

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
