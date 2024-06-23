const toggler = document.querySelector(".nav-toggler");
const navbar = document.querySelector(".main-nav");
toggler.addEventListener("click",(e) => {
    navbar.classList.toggle("nav-expanded");
});