const router = require("express").router();
const {
    createNote, removeNote
} = require("../notes");
const {
    notesArray
} = require("../db/db.json");

router.get("/note", (req, res) => {
    let save = notes;
    res.json(save);
})

router.post("/note", (req, res) => {
    req.body.id = note.length.toString();
    let notes = createNote(req.body, note);
    res.json(notes);
})

router.delete("/notes/:id", (req, res) => {
    removeNote(note, req.params.id);
    res.json(note);
})

module.exports = router;