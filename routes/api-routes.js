const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


// Get all notes by using fs to read the .JSON file and returning its data
router.get('/notes', function (req, res) {
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        return res.json(notes);
    });

});

// Creates or Updates a Note
router.post('/notes', function (req, res) {
    console.log('New Note ====================');
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
    

    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    notes.push(newNote);

    fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        console.log('File updated!');
        res.json(notes);
    });
    });
});

// Delete note depending on the ID sent from front-end
router.delete('/notes/:id', function (req, res) {
    let id = req.params.id;
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        notes = JSON.parse(data);

    for (var i = 0; i < notes.length; i++) {

        if (notes[i].id === id) {
            console.log(notes[i]);
            notes.splice(i, 1);
        }
    }

    fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        console.log('File updated!');
        res.json(id);
    });
});

});

module.exports = router;