const router = require("express").Router();
const axios = require("axios");

router.get("/search/:zip/:distance", function (req, res) {
    axios.get(`https://api.data.gov/ed/collegescorecard/v1/schools/?zip=${req.params.zip}&distance=${req.params.distance}&sort=2015.completion.rate_suppressed.overall%3adesc&fields=id,school.name,school.city,school.state,2015.completion.rate_suppressed.overall&page=0&api_key=pTArHCwVfBH8pDnZG0UAOdFF6iDRecYtEs9rCIc3`)
        .then(function (response) {
            res.json(response.data.results);
        })
        .catch(function (err) {
            console.log(err);
            res.status(400).end();
        })
});

router.get("/schools/:id", function (req, res) {
    axios.get(`https://api.data.gov/ed/collegescorecard/v1/schools/?id=${req.params.id}&sort=2015.completion.rate_suppressed.overall%3adesc&fields=id,school.name,school.city,school.state,2015.completion.rate_suppressed.overall&page=0&api_key=pTArHCwVfBH8pDnZG0UAOdFF6iDRecYtEs9rCIc3`)
        .then(function (response) {
            res.json(response.data.results);
        })
        .catch(function (err) {
            console.log(err);
            res.status(400).end();
        })
})

module.exports = router;