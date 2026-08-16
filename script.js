function toggleNav() {
    document.getElementById("sidebar").classList.toggle("open");
}

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("open");
    offScreenMenu.classList.toggle("open");
})

let currentFact = 0;
const cards = document.querySelectorAll(".fact-card");

function updateFacts() {
    cards.forEach((card, index) => {
        card.classList.remove("active", "left", "right");

        if (index === currentFact) {
            card.classList.add("active");
        } else if (index === currentFact - 1) {
            card.classList.add("left");
        } else if (index === currentFact + 1) {
            card.classList.add("right");
        }
    });
}

function nextFact() {
    currentFact = (currentFact + 1) % cards.length;
    updateFacts();
}

function prevFact() {
    currentFact = (currentFact - 1 + cards.length) % cards.length;
    updateFacts();
}

updateFacts();
