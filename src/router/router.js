const router = require("express").Router()

router
  .get("/", (req, res, next) => {
    res.render("pages/index", {title: "Home", message: "I am Home"})
    next()
  })
  .get("/blog", (req, res, next) => {
    res.render("pages/blog", {title: "Blog", message: "I am Blog"})
    next()
  })
  .get("/contact", (req, res, next) => {
    res.render("pages/contact", {title: "Contact", message: "I am Contact"})
    next()
  })


module.exports = router
