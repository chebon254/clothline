document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", function () {
            if (!card.classList.contains("expanded")) {
                // Collapse all cards
                cards.forEach((c) => {
                    c.classList.remove("expanded");
                    c.style.width = "25%";
                });

                // Expand the clicked card
                card.classList.add("expanded");
                card.style.width = "100vw";
            }
        });
    });
});
