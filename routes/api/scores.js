const router = require("express").Router();
const scoreController = require("../../controller/scoreController");

//Matches with "/api/scores"
router.route("/:name")
  .get(scoreController.globalTop);

router
  .route('/score')
  .post(scoreController.postScore);

router
  .route('/gamehighscore/:game')  
  .get(scoreController.gamehighscore)

// Matches with "/api/scores/user/:id"
router
  .route("/user/:id")
  .get(scoreController.userTop);

module.exports = router;
