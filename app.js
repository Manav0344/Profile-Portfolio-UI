const menuIcon = document.getElementById("menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
  navlist.classList.toggle("open");
});
