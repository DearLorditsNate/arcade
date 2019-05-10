const axios = require('axios');

module.exports = {
    gameHighScore: function(game){
        return axios.get('/api/score/gamehighscore/' + game)
    },
    userHighScores: function(uid) {
        return axios.get('/api/score/user/' + uid);
    }
};