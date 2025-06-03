const multer = require("multer");
const express = require("express");
const path = require("node:path");
//storage//
const storageconfig = multer.diskStorage({
  destination: path.join(__dirname, "uploads"),
  filename: (req, file, res) => {
    res(null, Date.now(), "-", file.originalname);
  },
});
//filter//
const filefilterconfig = function (req, file, cb) {
  if (file.mimitype === "image.jpeg" || file.mimitype === "image.png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
//object//
const upload = multer({
  storage: storageconfig,
  limits: {
    fileSize: 1024 * 1024 * 20,
  },
  filefilter: filefilterconfig,
});
module.exports = upload;
