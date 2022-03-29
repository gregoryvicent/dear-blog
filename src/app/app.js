const express = require("express")
// const morgan = require("morgan")
const pug = require("pug")

const router = require("./router/router")

const app = express()
const statics = __dirname.replace("app", "public")

app
  .set("views", "./src/public/views")
  .set("view engine", "pug")

app
  // .use(morgan("dev"))
  .use(express.static(statics))
  .use(router)

// Middleware to page 404
// app.use((err, req, res, next) => {
//     console.error("----------------------------------------------------------------------------------------------------")
//     console.error(err.stack)
//     res.status(404).send("This is an ERROR!!!")
//     next()
//   })

// Testing route to page 404 not found
// app.get("/", (req, res) => {
//   res.send("This is a response")
//   res.end()
// })

module.exports = app
