const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(express.static("client"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

const controller = require("./controller.js");

app.get("/api/userstories", controller.getStory);
app.post("/api/userstories", controller.addStory);

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`I sure hope your server is running on ${port}`)
);
