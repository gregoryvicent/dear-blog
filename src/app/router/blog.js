const GetPosts = require("../lib/getPosts")

function blog(res, next) {
  const getPosts = new GetPosts()
  const posts = getPosts.getDataPosts()

  res.render("pages/blog", { title: "Blog", posts: posts })
  next()
}

module.exports = blog