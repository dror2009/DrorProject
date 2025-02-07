document.addEventListener("DOMContentLoaded", () => {
    const sp500Stocks = [
        "Apple Inc.", "Microsoft Corporation", "Amazon.com, Inc.", "Alphabet Inc. (Class A)",
        "Alphabet Inc. (Class C)", "Meta Platforms, Inc.", "Tesla, Inc.", "Berkshire Hathaway Inc.",
        "NVIDIA Corporation", "JPMorgan Chase & Co.", "Johnson & Johnson", "Visa Inc.",
        "Procter & Gamble Company", "UnitedHealth Group Incorporated", "Mastercard Incorporated",
        "Walmart Inc.", "Bank of America Corporation", "Home Depot, Inc.", "Walt Disney Company",
        "PayPal Holdings, Inc.", "Intel Corporation", "Verizon Communications Inc.",
        "Cisco Systems, Inc.", "Exxon Mobil Corporation", "AT&T Inc.", "Pfizer Inc.",
        "Chevron Corporation", "Merck & Co., Inc.", "PepsiCo, Inc.", "Coca-Cola Company",
        "Adobe Inc.", "Netflix, Inc.", "Comcast Corporation", "Nike, Inc.", "Salesforce.com, Inc.",
        "McDonald's Corporation", "AbbVie Inc.", "Medtronic plc", "Broadcom Inc.",
        "Honeywell International Inc.", "Accenture plc", "Thermo Fisher Scientific Inc.",
        "Morgan Stanley", "Wells Fargo & Company", "Bristol-Myers Squibb Company",
        "Qualcomm Incorporated", "Union Pacific Corporation", "Texas Instruments Incorporated",
        "Oracle Corporation", "Goldman Sachs Group, Inc."
    ];

    const list = document.getElementById("sp500List");
    if (list) {
        sp500Stocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#sp500List) not found.");
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
