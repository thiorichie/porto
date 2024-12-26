const express = require("express")
// import adminRouter from './admin.route.js';
const userRouter = require('./user.route')

const router = express()

router.use("/user", userRouter)

module.exports = router