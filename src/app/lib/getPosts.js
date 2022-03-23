const fs = require("fs")
const matter = require("gray-matter")

class GetPosts {
  #pathDirPosts = __dirname.replace("app/lib", "public/posts")
  #posts = []
  #postObject = []

  constructor() {
    this.#posts = fs.readdirSync(this.#pathDirPosts)
  }

  #dataPosts() {
    this.#posts.forEach((post) => {
      const data = fs.readFileSync(`${this.#pathDirPosts}/${post}`, {encoding: "utf8"})    

      this.#postObject.push(matter(data))
    })

    this.#postObject.sort((a, b) => b.data.date - a.data.date)

    return this.#postObject
  }

  getDataPosts() {
    this.#dataPosts()

    return this.#postObject
  }
}

module.exports = GetPosts