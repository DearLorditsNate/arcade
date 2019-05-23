const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema ({
    gameName: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    initials: {
        type: String
    }
});

const Score = mongoose.model("Score", scoreSchema, 'scores');

module.exports = Score;