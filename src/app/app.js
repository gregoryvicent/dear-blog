const express = require("express")
const pug = require("pug")

const router = require("./router/router")

const app = express()
const statics = __dirname.replace(/app$/, "public")

app
  .set("views", "./src/public/views")
  .set("view engine", "pug")

app
  .use(express.static(statics))
  .use(router)
  .use((req, res, next) => {
    res
    .status(404)
    .render("pages/notFound", {title: "404"})

    next()
  })


module.exports = app
