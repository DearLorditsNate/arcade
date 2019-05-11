const router = require("express").Router();
const scoreController = require("../../controller/scoreController");

// Matches with "/api/score/:name"
router.route("/:name")
  .get(scoreController.globalTop);

// Matches with "/api/score/score"
router
  .route('/score')
  .post(scoreController.postScore);

// Matches with "api/score/gamehighscore/:game"
router
  .route('/gamehighscore/:game')  
  .get(scoreController.gamehighscore)

// Matches with "/api/score/user/:id"
router
  .route("/user/:id/:name")
  .get(scoreController.userTop);

module.exports = router;
