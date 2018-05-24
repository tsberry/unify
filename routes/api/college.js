const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");
const isAuthenticated = require("../../config/auth");

router.post("/", isAuthenticated, collegeController.saveCollege);
router.post("/:collegeId/:userId", isAuthenticated, collegeController.saveUser);
router.delete("/:collegeId/:userId", isAuthenticated, collegeController.deleteUser);
router.get("/:id", isAuthenticated, collegeController.getCollege);

module.exports = router;