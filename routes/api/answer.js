const router = require("express").Router();
const answerController = require("../../controllers/answerController");
const isAuthenticated = require("../../config/auth");

router.post("/", isAuthenticated, answerController.saveAnswer);

module.exports = router;