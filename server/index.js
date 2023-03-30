const express = require("express");
const cors = require("cors");
require("dotenv/config");
const connectDB = require("./config/db");
const studentsRouter = require("./routes/students");
const authenticRouter = require("./routes/admin");

const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/students", studentsRouter);
app.use("/auth", authenticRouter);
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../client/build");
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
  });
});
