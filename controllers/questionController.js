const db = require("../models");

module.exports = {
    saveQuestion: function (req, res) {
        db.Question.Create( 
            { 
                question: req.body.question,
                SavedCollegeId: req.body.SavedCollegeId
                // UserId: req.user
            } 
        )
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}