const router = require("express").Router()

router
  .get("/", (req, res) => {
    res.render("pages/index", {title: "Pug", message: "Index"})
  })

module.exports = router
