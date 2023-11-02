const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.json({ success: true, message: "App is Running Fine" });
});
app.listen(3000, () => console.log("App is Running on port 3001"));
