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
            .then(data => {
                db.Answer.findAll({
                    where: {
                        QuestionId: req.body.questionId
                    },
                    include: [
                        {
                            model: db.User
                        }
                    ]
                })
                .then(answers => res.json(answers));
            })
            .catch(err => res.status(422).json(err));
    }
}