const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoutes = require("./routes/productRoute");
const PORT = 3000;
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "server is running",
  });
});

app.use("/Products", productRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => {
      console.log("server is running fine and good");
    });
  })
  .catch((err) => {
    console.error("Failed to connect to mongoDB");
    console.log(err.message);
  });
