function toggleNav() {
    document.getElementById("sidebar").classList.toggle("open");
}

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("open");
    offScreenMenu.classList.toggle("open");
})