const router = require("express").Router();
const scoreRoutes = require("./scores");

// Score routes
router.use("/score", scoreRoutes);

module.exports = router;
