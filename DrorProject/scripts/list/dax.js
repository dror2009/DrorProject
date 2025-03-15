document.addEventListener("DOMContentLoaded", () => {
    const daxStocks = [
        "Allianz", "BASF", "Bayer", "BMW", "Continental", "Covestro", "Daimler",
        "Deutsche Bank", "Deutsche Börse", "Deutsche Post", "Deutsche Telekom",
        "E.ON", "Fresenius", "HeidelbergCement", "Henkel", "Infineon Technologies",
        "Linde", "Merck", "Munich Re", "SAP", "Siemens", "Volkswagen"
    ];

    // Populate the DAX Stock List
    const list = document.getElementById("daxList");
    if (list) {
        daxStocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#daxList) not found.");
    }

    // Handle collapsible toggle
    const collapsible = document.querySelector(".collapsible");
    const content = document.querySelector(".content");

    if (!collapsible || !content) {
        console.error("Collapsible button or content container not found for DAX.");
        return;
    }

    collapsible.addEventListener("click", () => {
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
        collapsible.classList.toggle("active");

        console.log(`DAX content is now ${isVisible ? "hidden" : "visible"}`);
    });
});
