document.addEventListener("DOMContentLoaded", () => {
    const djiaStocks = [
        "3M", "American Express", "Amgen", "Amazon", "Apple", "Boeing",
        "Caterpillar", "Chevron", "Cisco Systems", "The Coca-Cola Company",
        "Disney", "Goldman Sachs", "The Home Depot", "Honeywell International",
        "IBM", "Johnson & Johnson", "JPMorgan Chase", "McDonald's",
        "Merck & Co.", "Microsoft", "Nike", "Nvidia", "Procter & Gamble",
        "Salesforce", "Sherwin-Williams", "The Travelers Companies",
        "UnitedHealth Group", "Verizon Communications", "Visa Inc.", "Walmart"
    ];

    const list = document.getElementById("djiaList");
    if (list) {
        djiaStocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#djiaList) not found.");
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
