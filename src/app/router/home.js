const GetPosts = require("../lib/getPosts")

function home(res, next) {
  const getPosts = new GetPosts()
  const posts = getPosts.getDataPosts()
  
  res.render("pages/index", { title: "Home", posts: posts })
  next()
}

module.exports = home