document.addEventListener("DOMContentLoaded", () => {
    const cacStocks = [
        "Airbus", "ArcelorMittal", "AXA", "BNP Paribas", "Capgemini", "Carrefour",
        "Crédit Agricole", "Danone", "Dassault Systèmes", "Engie", "EssilorLuxottica",
        "Hermès", "Kering", "L'Oréal", "LVMH", "Michelin", "Orange", "Pernod Ricard",
        "Renault", "Sanofi", "Schneider Electric", "Société Générale", "STMicroelectronics",
        "TotalEnergies", "Vinci", "Vivendi"
    ];

    // Populate the CAC 40 Stock List
    const list = document.getElementById("cacList");
    if (list) {
        cacStocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#cacList) not found.");
    }

    // Handle collapsible toggle
    const collapsible = document.querySelector(".collapsible");
    const content = document.querySelector(".content");

    if (!collapsible || !content) {
        console.error("Collapsible button or content container not found for CAC 40.");
        return;
    }

    collapsible.addEventListener("click", () => {
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
        collapsible.classList.toggle("active");

        console.log(`CAC 40 content is now ${isVisible ? "hidden" : "visible"}`);
    });
});
