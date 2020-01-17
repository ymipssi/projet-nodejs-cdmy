const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel')
const User = mongoose.model('User');

exports.register = function(req, res) {
    var newUser = new User(req.body);
    newUser.hash_password = bcrypt.hashSync(req.body.hash_password, 10);
    //console.log('testhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
    newUser.save((error, user) => {
      if (error) {
        res.status(500);
        res.json({message: "Erreur lors de la création de l'user"});
      } else {
        user.hash_password = undefined;
        return res.json(user);
      }
    });
}

exports.sign_in = function(req, res) {
    User.findOne({
        email: req.body.email
      }, function(error, user) {
        if (error) {
            res.status(500);
            res.json({message: "Erreur serveur lors de la connexion"})
        }
        if (!user) {
         res.status(401).json({ message: 'Mot de passe ou email erroné' });
       } else if (user) {
         if (!user.comparePassword(req.body.hash_password)) {
           res.status(401).json({ message: 'Mot de passe ou email erroné' });
          } else {
            return res.json({token: jwt.sign({ email: user.email, nom: user.nom, prenom: user.prenom, _id: user._id}, 'nodejs_api')});
          }
        }
      });
}


exports.loginRequired = function(req, res, next) {
    if (req.user) {
        next();
      } else {
        return res.status(401).json({ message: 'Utilisateur non autorisé' });
      }
}


exports.get_all_users = (req, res) => {
  User.find({}, (error, users) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(users);
    }
  })
}


exports.get_a_user = (req, res) => {
  User.findById(req.params._id, (error, users) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(200);
      res.json(users);
    }
  })
}
