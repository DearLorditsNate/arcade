const axios = require('axios');

module.exports = {
    gameHighScore: function(game){
        return axios.get('/api/score/gamehighscore/' + game)
    },
    userHighScores: function(uid, name) {
        return axios.get('/api/score/user/' + uid + "/" + name);
    }
};