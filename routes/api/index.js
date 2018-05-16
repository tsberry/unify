const router = require("express").Router();
const scoreboardRoutes = require("./collegescoreboard");

router.use("/collegescoreboard", scoreboardRoutes);

module.exports = router;