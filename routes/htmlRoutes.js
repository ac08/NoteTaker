// establish the dependencies
const path = require("path");
const router = require("express").Router();

// notes html rout 
router.get("/notes", (req, res) => {
    // render the notes HTML page
    res.sendFile(path.join(__dirname, '../public/', '/notes.html'));
});

// all other html routes 
router.get("*", (req, res) => {
    // default route to render index.html
    res.sendFile(path.join(__dirname, '../public/', '/index.html'));
});

module.exports = router;