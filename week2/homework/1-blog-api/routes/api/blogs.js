const express = require("express");
const fs = require("fs");
const path = require("path");
const helpers = require("../../helpers");
const router = express.Router();

//homepage route
router.get("/", (req, res) => res.sendfile(path.join(__dirname, "../../public", "index.html")));

//1.1 Creating new posts
router.post("/", (req, res) => {
  if (helpers.isInvalid(req)) {
    res.status(400).send("Invalid data!");
    return;
  }
  fs.writeFileSync(
    path.join(__dirname, "../../public", req.body.title),
    req.body.content
  );
  res.end("ok");
});

//1.2 Updating existing posts
router.put("/", (req, res) => {
  if (!helpers.isInvalid(req)) {
    fs.writeFileSync(
      path.join(__dirname, "../../public", req.body.title),
      req.body.content
    );
    res.end("ok");
  } else {
    res.status(400).send("This post does not exist!");
  }
});

//1.3 Deleting posts
router.delete("/:title", (req, res) => {
  const title = req.params.title;
  if (typeof title != "undefined") {
    fs.unlinkSync(path.join(__dirname, "../../public", title));
    res.end("ok");
  } else {
    res.status(400).send("Invalid request!");
  }
});

//1.4 Reading posts
router.get("/:title", (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(path.join(__dirname, "../../public", title))) {
    res.sendFile(path.join(__dirname, "../../public", "index.html"));
  } else {
    res.status(400).send("Invalid request!");
  }
});

module.exports = router;
