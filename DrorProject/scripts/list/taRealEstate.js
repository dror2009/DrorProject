document.addEventListener("DOMContentLoaded", () => {
    const taRealEstateStocks = [
        "Menivim The New REIT Ltd.",
        "Israel Canada (T.R) Ltd.",
        "Mivne Real Estate (K.D) Ltd.",
        "Ari Real Estate (Arena) Investment Ltd.",
        "Cielo Blu Group Ltd.",
        "Hagag Group Real Estate Entrepreneurship Ltd.",
        "Electra Real Estate Ltd.",
        "Property & Building Corp. Ltd.",
        "Libental Holdings Ltd.",
        "Azorim Investment, Development & Construction Co. Ltd.",
        "Rimon Consulting and Management Services Ltd.",
        "Blue Square Real Estate Ltd.",
        "Duniec Bros. Ltd.",
        "Amot Investments Ltd.",
        "Ashtrom Group Ltd."
    ];


    const list = document.getElementById("taRealEstateList");
    if (list) {
        taRealEstateStocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#taRealEstateList) not found.");
    }

    const collapsible = document.querySelector(".collapsible");
    const content = document.querySelector(".content");

    if (!collapsible || !content) {
        console.error("Collapsible button or content container not found. Check your HTML structure.");
        return;
    }

    collapsible.addEventListener("click", () => {
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
        collapsible.classList.toggle("active");

        console.log(`Content is now ${isVisible ? "hidden" : "visible"}`);
    });
});
