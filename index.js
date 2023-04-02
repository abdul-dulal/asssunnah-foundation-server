const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
const imgRoute = require("./router/imageRouter");
const newsRoute = require("./router/NewsRouter");
const donateRoute = require("./router/Donateroute");
const checkoutRoute = require("./router/checkoutRouter");

// mongoose connect
mongoose

  .connect(process.env.MONGOOSE_URI)
  .then(() => {
    console.log("database connect");
  })
  .catch((err) => {
    err.message;
  });
app.post("/payment/success", async (req, res) => {
  res.redirect("https://asssunnah-foundation-clone.vercel.app/success");
});
app.post("/payment/cancel", async (req, res) => {
  res.redirect("https://asssunnah-foundation-clone.vercel.app/cancel");
});

app.use("/img", imgRoute);
app.use("/news", newsRoute);
app.use("/donate", donateRoute);
app.use("/checkout", checkoutRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("listenig port 3000");
});
