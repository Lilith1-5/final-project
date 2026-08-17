function toggleNav() {
    document.getElementById("sidebar").classList.toggle("open");
}

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("open");
    offScreenMenu.classList.toggle("open");
})

/*dropdown card*/
function toggleDropdown(header) {
    const card = header.parentElement;
    card.classList.toggle("open");

    const dropdown = card.querySelector(".tips-dropdown");

    if (card.classList.contains("open")) {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    } else {
        dropdown.style.maxHeight = "0";
    }
}