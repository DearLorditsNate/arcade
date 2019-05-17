const axios = require('axios');

module.exports = {
    gameHighScore: function(game){
        return axios.get('/api/score/gamehighscore/' + game)
    },
    userHighScores: function(uid, name) {
        return axios.get('/api/score/user/' + uid + "/" + name);
    },
    postMineSweeper: function(score, firebaseuid) {
        return axios.post ('/api/score/score', {
            gameName: 'minesweeper', 
            score: score, 
            uid:firebaseuid });
    }
};