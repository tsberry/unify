const router = require("express").Router();
const answerController = require("../../controllers/answerController");

router.post("/", answerController.saveAnswer);

module.exports = router;