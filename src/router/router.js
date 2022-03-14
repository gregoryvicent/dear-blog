const router = require("express").Router()

router
  .get("/", (req, res) => {
    res.send("Hi, I am a Router for express")
  })
  .get("/blog", (req, res) => {
    res.send("Hi, I am a Blog")
  })
  .get("/pug", (req, res) => {
    res.render("index", {title: "Pug", message: "Hi, I am Pug"})
  })

module.exports = router
