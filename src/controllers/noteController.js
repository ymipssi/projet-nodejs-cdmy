const mongoose = require('mongoose');
const commentModel = require('../models/noteModel');
const Comment = mongoose.model("Note");

exports.get_all_notes = (req, res) => {
  Note.find({: req.params.post_id}, (error, posts) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(posts);
    }
  })
}

exports.create_a_note = (req, res) => {
  req.body.post_id = req.params.post_id;
  let new_note = new Note(req.body);

  new_note.save((error, note) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(201);
      res.json(note);
    }
  })
}

exports.get_a_note = (req, res) => {
  Comment.findById(req.params.note_id, (error, note) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(note);
    }
  })
}

exports.update_a_note = (req, res) => {
  Comment.findOneAndUpdate({_id: req.params.note_id}, req.body, {new: true}, (error, note) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(note);
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