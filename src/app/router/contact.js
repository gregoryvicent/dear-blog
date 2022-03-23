function contact(res, next) {
  res.render("pages/contact", { title: "Contact"})
  next()
}

module.exports = contact