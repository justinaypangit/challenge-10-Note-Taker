const { json } = require("express");
const fs = require("fs");
const path = require("path");

function createNote(body, notesArray) {
    const notes = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "/db/db.json"),
        json.stringfy({
            notes: notesArray
        }, null, 2)
    )
    return notes;
}

function removeNote(notesArray, id) {
    let removeId = parseInt(id);
    notes.notesArray.splice(removeId, 1);

    for (let i=removeId; i<notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, "/db/db.json"),
        json.stringfy({
            notes: notesArray
        }, null, 2)
    )
}

module.exports = {
    createNote, removeNote
};