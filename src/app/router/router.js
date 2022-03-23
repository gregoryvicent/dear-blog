const router = require("express").Router()

const home = require("./home")
const blog = require("./blog")
const contact = require("./contact")

router
  .get("/", (req, res, next) => home(res, next))
  .get("/blog", (req, res, next) => blog(res, next))
  .get("/contact", (req, res, next) => contact(res, next))

module.exports = router