const db = require("../models");


module.exports = {
    findAll: function(req,r es){
        db.Aricle
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }, 
    create: function(req, res){
        db.Article
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    remove: function(req, res){
        db.Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}