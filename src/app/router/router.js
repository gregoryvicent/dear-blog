const router = require("express").Router()

const home = require("./home")
const blog = require("./blog")
const contact = require("./contact")
const post = require("./post")

router
  .get("/", (req, res, next) => home(res, next))
  .get("/blog", (req, res, next) => blog(res, next))
  .get("/contact", (req, res, next) => contact(res, next))
  .get("/posts/:post", (req, res, next) => post(req, res, next))

module.exports = router