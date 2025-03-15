document.addEventListener("DOMContentLoaded", () => {
    const euroStoxxStocks = [
        "Adidas", "Airbus", "Allianz", "ASML", "AXA", "Banco Santander", "BASF",
        "Bayer", "BNP Paribas", "Deutsche Bank", "Deutsche Telekom", "Enel",
        "Engie", "Iberdrola", "Inditex", "ING Group", "L'Oréal", "LVMH",
        "Munich Re", "Nestlé", "Philips", "Safran", "SAP", "Siemens", "TotalEnergies",
        "Unilever", "Volkswagen", "Zalando"
    ];

    // Populate the Euro Stoxx 50 Stock List
    const list = document.getElementById("euroStoxxList");
    if (list) {
        euroStoxxStocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#euroStoxxList) not found.");
    }

    // Handle collapsible toggle
    const collapsible = document.querySelector(".collapsible");
    const content = document.querySelector(".content");

    if (!collapsible || !content) {
        console.error("Collapsible button or content container not found for Euro Stoxx 50.");
        return;
    }

    collapsible.addEventListener("click", () => {
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
        collapsible.classList.toggle("active");

        console.log(`Euro Stoxx 50 content is now ${isVisible ? "hidden" : "visible"}`);
    });
});
