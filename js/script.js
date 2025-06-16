const arrowLeftTable = document.querySelector("#arrow-left-table");
const arrowRightTable = document.querySelector("#arrow-right-table");
const tablesContainer = document.querySelector(".main-tables-container");
const tables = document.querySelectorAll(".main-currency-table");

const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const plansContainer = document.querySelector(".plans-container--slider");
const cards = document.querySelectorAll(".plans-container--card");

let currentIndexTable = 0;
let currentIndex = Math.floor(cards.length / 2);

const scrollToCardTables = (index) => {
    const table = tables[index];
    table.scrollIntoView({ behavior: "smooth", inline: "center" });
};

const scrollToCard = (index) => {
    const card = cards[index];
    card.scrollIntoView({ behavior: "smooth", inline: "center" });
};

function updateArrowVisibility() {
    // Flechas para tablas
    arrowLeftTable.style.display = currentIndexTable === 0 ? "none" : "block";
    arrowRightTable.style.display = currentIndexTable === tables.length - 1 ? "none" : "block";

    // Flechas para cards
    arrowLeft.style.display = currentIndex === 0 ? "none" : "block";
    arrowRight.style.display = currentIndex === cards.length - 1 ? "none" : "block";
}

function updateTableArrowVisibility() {
    const canScroll = tablesContainer.scrollWidth > tablesContainer.clientWidth;
    const plansScoll = plansContainer.scrollWidth > plansContainer.clientWidth;
    arrowLeftTable.style.display = canScroll ? "block" : "none";
    arrowRightTable.style.display = canScroll ? "block" : "none";
    arrowLeft.style.display = plansScoll ? "block" : "none";
    arrowRight.style.display = plansScoll ? "block" : "none";
}

// Ejecutar al cargar y redimensionar
window.addEventListener("load", updateTableArrowVisibility);
window.addEventListener("resize", updateTableArrowVisibility);

window.addEventListener("load", () => {
    const card = cards[currentIndex];
    const container = card.parentElement;

    const containerCenter = container.scrollWidth / 2 - container.clientWidth / 2;
    container.scrollTo({
        left: containerCenter,
        behavior: "smooth"
    });
});


arrowLeftTable.addEventListener("click", () => {
    if (currentIndexTable > 0) {
        currentIndexTable--;
        scrollToCardTables(currentIndexTable);
        updateArrowVisibility();
    }
});

arrowRightTable.addEventListener("click", () => {
    if (currentIndexTable < tables.length - 1) {
        currentIndexTable++;
        scrollToCardTables(currentIndexTable);
        updateArrowVisibility();
    }
});

arrowLeft.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToCard(currentIndex);
        updateArrowVisibility();
    }
});

arrowRight.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        scrollToCard(currentIndex);
        updateArrowVisibility();
    }
});
