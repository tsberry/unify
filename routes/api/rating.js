const router = require("express").Router();
const ratingController = require("../../controllers/ratingController");

router.post("/", ratingController.rate);

module.exports = router;