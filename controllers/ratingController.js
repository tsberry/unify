const db = require("../models");

module.exports = {
    rate: function (req, res) {
        const userId = req.body.userId;
        const collegeId = req.body.collegeId;
        db.Rating
        .upsert({
            UserId: userId,
            CollegeId: collegeId,
            ratingFor_Transport: req.body.transport,
            ratingFor_Food: req.body.food,
            ratingFor_Faculty: req.body.faculty,
            ratingFor_CampusLife: req.body.campuslife,
            ratingFor_Security: req.body.security
        })
        .then(data => res.json(data));
    }
}