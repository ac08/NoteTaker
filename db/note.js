class Note {
  constructor(title, text) {
    this.title = title;
    this.text = text;

    Note.lastId++;
    this.id = Note.lastId;
  }
}
// Incremate Id
Note.lastId = 0;

module.exports = Note;