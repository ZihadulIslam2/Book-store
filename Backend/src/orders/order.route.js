const express = require('express')
const { createAOrder } = require('./order.controller')

const router = express.Router()

// create order endpoints
router.post("/", createAOrder)

module.exports = router
