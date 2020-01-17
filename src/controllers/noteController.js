const mongoose = require('mongoose');
const noteModel = require('../models/noteModel');
const Note = mongoose.model("Note");

exports.get_all_notes = (req, res) => {
  Note.find({}, (error, notes) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(notes);
    }
  })
}

exports.create_a_note = (req, res) => {
  // req.body.module_id = req.params.module_id;
  let new_note = new Note(req.body);

  new_note.save((error, notes) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(201);
      res.json(notes);
    }
  })
}

exports.get_a_note = (req, res) => {
  Note.findById(req.params.note_id, (error, notes) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(notes);
    }
  })
}

exports.update_a_note = (req, res) => {
  Note.findOneAndUpdate({_id: req.params.note_id}, req.body, {new: true}, (error, notes) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(notes);
    }
  })
}

exports.delete_a_note = (req, res) => {
  Note.remove({_id: req.params.note_id}, (error) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json({message: "Commentaires supprimé"});
    }
  })
}
