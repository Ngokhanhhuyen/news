require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "image");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

const app = express();
app.use(express.json());
app.use(cors());

app.get("/image/:id", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, `../image/${req.params.id}`));
});
app.post("/upload", upload.single("photo"), (req, res) => {
    res.send(req.file.filename);
});

app.listen(8081, () => console.log("Máy chủ đã chạy tại công 8081"));
