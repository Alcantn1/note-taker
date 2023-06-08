// const express = require('express');
const router = require('express').Router();
const store = require('../db/store');

router.get('/notes', (req, res) => {
    store.getNotes()
    .then((notes) => {
      return res.json(notes);
    })
});
  router.post('/notes', (req, res) => {
    const newNote = req.body;
    store.addNote(newNote)
      .then((note) => {
        return res.json(note);
      })
    });

  
module.exports = router;

