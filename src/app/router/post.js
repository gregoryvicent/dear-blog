const fs = require("fs")
const showdown = require("showdown")
const html2pug = require("html2pug")

const GetPosts = require("../lib/getPosts")

function post(req, res, next) {
  const getPost = new GetPosts()
  const converter =  new showdown.Converter()
  const posts = getPost.getDataPosts()

  let page = "pages/notFound"
  let title = ""

  posts.forEach((element) => {
    if (element.file === req.params.post) {
      page = "pages/post"
      title = element.data.title
      pugContent = html2pug(converter.makeHtml(element.content), {fragment: true})

      fs.writeFileSync(__dirname.replace("app/router", "public/views/pages/postContent.pug"), pugContent)
    }
  })

  res.render(page, {title: title})
  res.end()

  next()
}

const newPost = new GetPosts()

console.log(newPost.getDataPosts())

module.exports = post