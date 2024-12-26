const express = require("express")
// import adminRouter from './admin.route.js';
const userRouter = require('./user.route')
const authRouter = require('./auth.route')
const gameRouter = require('./game.route')

const router = express()

router.use("/user", userRouter)
router.use("/auth", authRouter)
router.use("/game", gameRouter)

module.exports = router