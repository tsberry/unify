const db = require("../models");

module.exports = {
    saveQuestion: function (req, res) {
        db.Question.create( 
            { 
                question: req.body.question,
                CollegeId: req.body.collegeId,
                UserId: req.body.userId
            } 
        )
            .then(data => {
                db.Question
                .findAll({
                    where: {
                        CollegeId: req.body.collegeId
                    },
                    include: [
                        {
                            model: db.User
                        },
                        {
                            model: db.Answer,
                            include: [
                                {
                                    model: db.User
                                }
                            ]
                        }
                    ]
                })
                .then(questions => res.json(questions));
            })
            .catch(err => res.status(422).json(err));
    }
}