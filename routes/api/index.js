const router = require("express").Router();
const scoreRoutes = require("./scores");

// Book routes
router.use("/score", scoreRoutes);

module.exports = router;
