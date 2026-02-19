const menuIcon = document.getElementById("menu-icon");
const navlist = document.querySelector(".navlist");
const navLinks = document.querySelectorAll(".navlist li a");


menuIcon.addEventListener("click", () => {
  navlist.classList.toggle("open");
});


navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navlist.classList.contains("open")) {
      navlist.classList.remove("open");
    }
  });
});
