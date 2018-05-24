const db = require("../models");

module.exports = {
    saveAnswer: function (req, res) {
        db.Answer.create( 
            { 
                answer: req.body.answer,
                QuestionId: req.body.questionId,
                CollegeId: req.body.collegeId,
                UserId: req.body.userId
            } 
        )
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}