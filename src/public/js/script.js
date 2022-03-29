const $burgerMenu = document.getElementById("hamburger"),
  $menuBox = document.querySelector(".Header--mobile-menuBox")

$burgerMenu.addEventListener("click", () => {
  $burgerMenu.classList.toggle("is-active")
  $menuBox.classList.toggle("Header--mobile-menuBox--isActive")
})
