const mongoose = require('mongoose');
const moduleModel = require('../models/sessionModel');
const Module = mongoose.model("Session");

exports.get_all_sessions = (req, res) => {
  Session.find({}, (error, sessions) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(sessions);
    }
  })
}

exports.create_a_session = (req, res) => {
  req.body.user_id = req.params.id;
  //req.body.session_id = req.params.session_id
  let new_session = new Session(req.body);

  new_session.save((error, user) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(201);
      res.json(user);
    }
  })
}

exports.get_a_session = (req, res) => {
  Session.findById(req.params.session_id, (error, session) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(session);
    }
  })
}

exports.update_a_session = (req, res) => {
  Session.findOneAndUpdate({_id: req.params.session_id}, req.body, {new: true}, (error, session) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(session);
    }
  })
}

exports.delete_a_session = (req, res) => {
  Session.remove({_id: req.params.session_id}, (error) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json({message: "Module supprimé"});
    }
  })
}

