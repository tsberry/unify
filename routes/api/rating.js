const router = require("express").Router();
const ratingController = require("../../controllers/ratingController");
const isAuthenticated = require("../../config/auth");

router.post("/", isAuthenticated, ratingController.rate);

module.exports = router;