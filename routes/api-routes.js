const router = require('express').Router();
const fs = require('fs');
const Note = require('../db/note');
let notes = [];


// Get all notes by using fs to read the .JSON file and returning its data
router.get('/notes', function (req, res) {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        notes = JSON.parse(data);
        return res.json(notes);
    });

});


// Get a single note by using fs to read the .JSON file accoridng to ID
router.get('/notes/:id', function (req, res) {
    let id = req.params.id;
    fs.readFileSync('db/db.json', (err, data) => {
        if (err) throw err;
        notes = JSON.parse(data);
    });

    console.log(`Looking for Note ID: ${id} =============`);

    for (let i = 0; i < notes.length; i++) {

        if (notes[i].id === id) {
            console.log(notes[i]);
            return res.json(notes[i]);
        }
    }

    res.json(id);
});

// Creates or Updates a Note
router.post('/notes', function (req, res) {
    console.log('New Note ====================');
    fs.readFileSync('db/db.json', (err, data) => {
        if (err) throw err;
        notes = JSON.parse(data);
    });

    let newNote;
    if (req.body.id === -1) {
        newNote = new Note(req.body.title, req.body.text);
        notes.push(newNote);

    } else {
        newNote = req.body;
        for (var i = 0; i < notes.length; i++) {
            if (newNote.id === notes[i].id) {
                notes.splice(i, 1, newNote);
            }
        }
    }
    console.log(newNote);

    fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        console.log('File updated!');
    });

    res.json(notes);
});

// Delete note depending on the ID sent from front-end
router.delete('/notes/:id', function (req, res) {
    let id = req.params.id;
    fs.readFileSync('db/db.json', (err, data) => {
        if (err) throw err;
        notes = JSON.parse(data);
    });

    for (var i = 0; i < notes.length; i++) {

        if (notes[i].id === id) {
            console.log(notes[i]);
            notes.splice(i, 1);
        }
    }

    fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        console.log('File updated!');
    });

    res.json(id);
});

module.exports = router;