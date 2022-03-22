let $posts = document.querySelectorAll(".post")

$posts.forEach((element) => {
  element.addEventListener("mouseover", () => {
    let $description = element.querySelector(".post-Description")

    $description.classList.add("post-Description--active")
  })
  element.addEventListener("mouseout", () => {
    let $description = element.querySelector(".post-Description")

    $description.classList.remove("post-Description--active")
  })
})