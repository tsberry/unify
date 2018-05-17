const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");

router.post("/", collegeController.saveCollege);

module.exports = router;