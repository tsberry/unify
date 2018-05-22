const router = require("express").Router();
const scoreboardRoutes = require("./collegescoreboard");
const collegeRoutes = require("./college");
const userRoutes = require("./users");
const questionRoutes = require("./question");
const answerRoutes = require("./answer");
const ratingRoutes = require("./rating");

router.use("/collegescoreboard", scoreboardRoutes);
router.use("/colleges", collegeRoutes);
router.use("/user", userRoutes);
router.use("/question", questionRoutes);
router.use("/answer", answerRoutes);
router.use("/rate", ratingRoutes);

module.exports = router;