const router = require("express").Router();
const questionController = require("../../controllers/questionController");
const isAuthenticated = require("../../config/auth");

router.post("/", isAuthenticated, questionController.saveQuestion);

module.exports = router;