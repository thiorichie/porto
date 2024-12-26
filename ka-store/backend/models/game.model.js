const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    gameId: {
        type: String,
        required: true
    },
    gameName: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true,
        enum: ["Mobile", "PC"]
    },
    picture: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Game', gameSchema);