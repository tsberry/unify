const db = require("../models");

module.exports = {
    getColleges: function (req, res) {
        db.User
        .find({
            where: {
                id: req.params.id
            }
        })
        .then(user => {
            console.log(user);
            user.getColleges({})
            .then(colleges => res.json({user: user, colleges: colleges}))
        })
        .catch(err => res.status(422).json(err));
    }
}