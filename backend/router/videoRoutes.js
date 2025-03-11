const express = require("express");
const multer = require("multer");
const { getVideos, uploadVideo, getVideoById } = require("../controllers/videoController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.get("/", getVideos);
router.post("/upload", upload.single("video"), uploadVideo); 
router.get("/:id", getVideoById);

module.exports = router;
