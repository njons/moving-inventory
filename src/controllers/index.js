// holds all routes - the router

const express = require("express");
const path = require("path");
const mime = require("mime-types");
// handle image uploads with multer
// const multer = require("multer");
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, "..", "..", "public", "images"));
//     },
//     filename: (req, file, cb) => {
//         const ext = mime.extension(file.mimetype);
//         cb(null, `${req.body.user}-${Date.now()}.${ext}`);
//     }
// });
// const upload = multer({ storage });

const router = express.Router();
const home = require("./home");
const login = require("./login");
const error = require("./error");
const register = require("./register");
const detail = require("./detail");

router.get("/", home.get);
// router.get("/login", login.get);
// router.post("/login", login.post);
// router.get("/register", register.get);
// router.post("/register", upload.single("profile"), signup.post);

module.exports = router;
