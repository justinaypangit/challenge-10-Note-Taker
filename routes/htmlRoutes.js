const path = require("path");
const router = require("express").router();

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../assets/notes.html"));
});

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

module.exports = router;