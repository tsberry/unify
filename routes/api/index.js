const router = require("express").Router();
const scoreboardRoutes = require("./collegescoreboard");
const collegeRoutes = require("./college");

router.use("/collegescoreboard", scoreboardRoutes);
router.use("/colleges", collegeRoutes);

module.exports = router;