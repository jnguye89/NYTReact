const db = require("../models");


module.exports = {
    findAllSaved: function(req,res){
        db.Aricle
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }, 
    findAllSearched: function(req, res){
        //search the NYT API to return all articles based on search criteria
        const authKey = "69f1ca36bc0d4f4b941abb2ec90442c6";
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        authKey + "&q=" + req.body.topic + "&begin_date=" + req.body.beginDate + "0101&end_date=" + req.body.endDate + "0101";

        $.ajax({
            url: queryURL,
            method: "GET"
          }).done(data => res.json(data));
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