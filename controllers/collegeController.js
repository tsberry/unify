const db = require("../models");

module.exports = {
    saveCollege: function (req, res) {
        db.SavedCollege
            .findOrCreate({ 
                where: { 
                    queryId: req.body.queryId 
                }, 
                defaults: { 
                    name: req.body.name, 
                    lat: req.body.lat, 
                    lon: req.body.lon 
                } 
            })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}