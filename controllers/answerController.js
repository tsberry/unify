const db = require("../models");

module.exports = {
    saveAnswer: function (req, res) {
        db.Answer.create( 
            { 
                answer: req.body.answer,
                QuestionId: req.body.QuestionId,
                SavedCollegeId: req.body.SavedCollegeId,
                UserId: req.body.UserId
            } 
        )
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}