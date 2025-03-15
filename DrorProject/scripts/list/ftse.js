document.addEventListener("DOMContentLoaded", () => {
    const ftseStocks = [
        "AstraZeneca", "BP", "British American Tobacco", "Diageo", "GlaxoSmithKline",
        "HSBC Holdings", "Lloyds Banking Group", "Rio Tinto", "Shell", "Unilever",
        "Barclays", "BHP", "Rolls-Royce Holdings", "Tesco", "Reckitt Benckiser",
        "Vodafone Group", "Aviva", "BAE Systems", "Glencore", "BT Group"
    ];

    // Populate the FTSE Stock List
    const list = document.getElementById("ftseList");
    if (list) {
        ftseStocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#ftseList) not found.");
    }

    // Handle collapsible toggle
    const collapsible = document.querySelector(".collapsible");
    const content = document.querySelector(".content");

    if (!collapsible || !content) {
        console.error("Collapsible button or content container not found for FTSE 100.");
        return;
    }

    collapsible.addEventListener("click", () => {
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
        collapsible.classList.toggle("active");

        console.log(`FTSE 100 content is now ${isVisible ? "hidden" : "visible"}`);
    });
});
