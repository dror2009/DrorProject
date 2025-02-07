document.addEventListener("DOMContentLoaded", () => {
    const ta35Stocks = [
        "Airport City Ltd.",
        "Alony Hetz Properties & Investments Ltd.",
        "Amot Investments Ltd.",
        "Ashtrom Group Ltd.",
        "Azrieli Group Ltd.",
        "Bezeq The Israeli Telecommunication Corp. Ltd.",
        "Israel Discount Bank Ltd.",
        "Elbit Systems Ltd.",
        "Electra Group",
        "Energean",
        "Energix Renewable Energies Ltd.",
        "First International Bank of Israel Ltd.",
        "Harel Insurance Investments & Financial Services Ltd.",
        "ICL Group Ltd.",
        "Israel Corporation Ltd.",
        "Isramco Negev 2 Limited Partnership",
        "Leumi Bank Ltd.",
        "Mizrahi Tefahot Bank Ltd.",
        "Melisron Ltd.",
        "Mivne Real Estate (K.D) Ltd.",
        "NewMed Energy",
        "NICE Ltd.",
        "Nova Measuring Instruments Ltd.",
        "OPC Energy Ltd.",
        "Ormat Technologies Inc.",
        "Phoenix Holdings Ltd.",
        "Sapiens International Corporation N.V.",
        "Shapir Engineering and Industry Ltd.",
        "Shikun & Binui Ltd.",
        "Strauss Group Ltd.",
        "Teva Pharmaceutical Industries Ltd.",
        "Tower Semiconductor Ltd.",
        "Elron Electronic Industries Ltd.",
        "LivePerson Inc."
    ];


    const list = document.getElementById("ta35List");
    if (list) {
        ta35Stocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#ta35List) not found.");
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
