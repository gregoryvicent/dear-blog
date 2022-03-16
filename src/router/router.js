const router = require("express").Router()

router
  .get("/", (req, res, next) => {
    res.render("pages/index", {title: "Home", message: "Home"})
    next()
  })
  .get("/blog", (req, res, next) => {
    res.render("pages/blog", {title: "Blog", message: "Blog"})
    next()
  })
  .get("/contact", (req, res, next) => {
    res.render("pages/contact", {title: "Contact", message: "Contact"})
    next()
  })


module.exports = router
