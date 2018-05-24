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
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}