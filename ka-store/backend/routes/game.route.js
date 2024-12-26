const express = require('express');
const router = express();
const Game = require('../models/game.model')

router.post('/insertGame', async (req, res) => {
    const findGame = await Game.findOne({gameId : "PUBGM"})
    if(!findGame){
        const createGame = await Game.create({
            gameId: "PUBGM",
            gameName: "PUBG Mobile",
            publisher: "Tencent",
            platform: "Mobile",
            picture: "/src/assets/PUBGM.jpg"
        })
        await createGame.save();
    }

    const fetch = await Game.find();
    return res.status(200).json(fetch)
});

module.exports = router