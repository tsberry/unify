const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");

router.post("/", collegeController.saveCollege);
router.post("/:collegeId/:userId", collegeController.saveUser);
router.delete("/:collegeId/:userId", collegeController.deleteUser);
router.get("/:id", collegeController.getCollege);

module.exports = router;