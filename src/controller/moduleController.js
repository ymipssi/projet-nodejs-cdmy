const mongoose = require('mongoose');
const moduleModel = require('../models/commentModel');
const Module = mongoose.model("Module");

exports.get_all_modules = (req, res) => {
  Module.find({user_id: req.params.user_id}, (error, modules) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(modules);
    }
  })
}

exports.create_a_module = (req, res) => {
  req.body.user_id = req.params.id;
  //req.body.session_id = req.params.session_id
  let new_module = new Module(req.body);

  new_module.save((error, user) => {
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

exports.get_a_module = (req, res) => {
  Module.findById(req.params.module_id, (error, module) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(module);
    }
  })
}

exports.update_a_module = (req, res) => {
  Module.findOneAndUpdate({_id: req.params.module_id}, req.body, {new: true}, (error, module) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(module);
    }
  })
}

exports.delete_a_module = (req, res) => {
  Module.remove({_id: req.params.module_id}, (error) => {
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

