const db = require("../models");

module.exports = {
    saveAnswer: function (req, res) {
<<<<<<< HEAD
        db.Question.Create( 
            { 
                answer: req.body.answer,
                QuestionId: req.body.QuestionId
                // UserId: req.user
=======
        db.Answer.create( 
            { 
                answer: req.body.answer,
                QuestionId: req.body.QuestionId,
                CollegeId: req.body.CollegeId,
                UserId: req.body.UserId
>>>>>>> 2e9698ba68f04bf8df4e829498cbe26e20ee1c93
            } 
        )
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}