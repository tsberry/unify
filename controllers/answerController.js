const db = require("../models");

module.exports = {
    saveAnswer: function (req, res) {
        db.Question.Create( 
            { 
                answer: req.body.answer,
                QuestionId: req.body.QuestionId
                // UserId: req.user
            } 
        )
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}