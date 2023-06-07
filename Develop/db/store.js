const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'notes.json');

function getNotes() {
  return new Promise((resolve, reject) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          // Return an empty array if the file doesn't exist yet
          return resolve([]);
        }
        return reject(err);
      }

      try {
        const notes = JSON.parse(data);
        resolve(notes);
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
}

function addNote(newNote) {
  return new Promise((resolve, reject) => {
    getNotes()
      .then(notes => {
        const updatedNotes = [...notes, newNote];
        const json = JSON.stringify(updatedNotes);

        fs.writeFile(dataFilePath, json, 'utf8', err => {
          if (err) {
            reject(err);
          } else {
            resolve(newNote);
          }
        });
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports = {
  getNotes,
  addNote
};
