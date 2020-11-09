// require dependencies 
const router = require('express').Router()
const store  = require('../db/store')

// GET '/api/notes' responds with all the notes from the db
router.get('/notes', (req, res) => {
    // the GET route where getNotes() function is initialized
    store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post('/notes/:id', (req, res) => {
    // the POST route where addNotes() function is initialized
    store
    .addNotes()
    .then(notes => )
})

router.delete('/notes/:id', (req, res) => {
    // the DELETE route where removeNote() function is initialized
    store
    // pass Id from client req
    .removeNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err));
});

module.exports = router;