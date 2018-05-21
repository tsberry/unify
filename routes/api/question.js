const router = require("express").Router();
const questionController = require("../../controllers/questionController");

router.post("/", questionController.saveQuestion);

module.exports = router;