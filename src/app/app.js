const express = require("express")
const morgan = require("morgan")
const pug = require("pug")

const router = require("../router/router")

const app = express()
const statics = __dirname.replace("app", "public")

app
  .set("views", "./src/public/views")
  .set("view engine", "pug")

app
  .use(morgan("dev"))
  .use(express.static(statics))
  .use("/", router)

module.exports = app
