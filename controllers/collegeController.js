const db = require("../models");

module.exports = {
    saveCollege: function (req, res) {
        db.College
            .findOrCreate({
                where: {
                    queryId: req.body.id
                },
                defaults: {
                    name: req.body.name,
                    city: req.body.city,
                    state: req.body.state,
                    students: req.body.students,
                    size: req.body.size,
                    years: req.body.type,
                    location: req.body.location,
                    ownership: req.body.ownership,
                    lat: req.body.lat,
                    lon: req.body.lon
                }
            })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    saveUser: function (req, res) {
        db.User
        .find({
            where: {
                id: req.params.userId
            }
        })
        .then(user => {
            db.College
            .find({
                where: {
                    queryId: req.params.collegeId
                }
            })
            .then(college => {
                college.addUser(user)
                .then(data => res.json(data));
            })
        })
        .catch(err => res.status(422).json(err));
    },
    deleteUser: function (req, res) {
        db.User
        .find({
            where: {
                id: req.params.userId
            }
        })
        .then(user => {
            db.College
            .find({
                where: {
                    queryId: req.params.collegeId
                }
            })
            .then(college => {
                college.removeUser(user)
                .then(data => res.json(data));
            })
        })
        .catch(err => res.status(422).json(err));
    },
    getCollege: function (req, res) {
        db.College
            .findOne({
                where: {
                    queryId: req.params.id
                },
                include: [
                    {
                        model: db.Question,
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
                    }
                ]
            })
            .then(college => {
                college.getUsers()
                .then(data => {
                    res.json({college: college, users: data});
                });
            })
            .catch(err => res.status(422).json(err));
    }
}