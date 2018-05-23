const db = require("../models");

module.exports = {
    rate: function (req, res) {
        const userId = req.body.userId;
        const collegeId = req.body.collegeId;
        db.Rating
        .upsert({
            UserId: userId,
            CollegeId: collegeId,
            transport: req.body.transport,
            food: req.body.food,
            faculty: req.body.faculty,
            campuslife: req.body.campuslife,
            security: req.body.security
        })
        .then(data => res.json(data));
    }
}