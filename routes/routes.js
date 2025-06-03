const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const router = express.Router();
const upload = multer({ dest: "uploads/" });
router.get("/upload", function (req, res) {
  res.render("upload", { title: "Upload Page", obj: "Upload File" });
});
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ message: "error occured.please upload jpeg file" });
  } else {
    res.json({ status: "true", message: "file upload successfully" });
  }
});
module.exports = router;
