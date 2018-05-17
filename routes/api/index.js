const router = require("express").Router();
const scoreboardRoutes = require("./collegescoreboard");
const collegeRoutes = require("./college");
const userRoutes = require("./users");

router.use("/collegescoreboard", scoreboardRoutes);
router.use("/colleges", collegeRoutes);
router.use("/user", userRoutes);

module.exports = router;