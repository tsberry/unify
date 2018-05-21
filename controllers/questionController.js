const db = require("../models");

module.exports = {
    saveQuestion: function (req, res) {
        db.Question.create( 
            { 
                question: req.body.question,
                CollegeId: req.body.CollegeId,
                UserId: req.body.UserId
            } 
        )
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}