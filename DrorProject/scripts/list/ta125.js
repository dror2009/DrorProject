document.addEventListener("DOMContentLoaded", () => {
    const ta125Stocks = [
        "Teva Pharmaceutical Industries Ltd.", "Bank Leumi Le-Israel B.M.", "Bank Hapoalim B.M.",
        "Elbit Systems Ltd.", "Mizrahi Tefahot Bank Ltd.", "Nice Ltd.", "Azrieli Group Ltd.",
        "Discount Bank Ltd.", "ICL Group Ltd.", "Tower Semiconductor Ltd.", "Nova Measuring Instruments Ltd.",
        "First International Bank of Israel Ltd.", "Melisron Ltd.", "Ormat Technologies Inc.",
        "Bezeq The Israel Telecommunication Corp. Ltd.", "NewMed Energy LP", "The Phoenix Holdings Ltd.",
        "Camtek Ltd.", "BIG Shopping Centers Ltd.", "Harel Insurance Investments & Financial Services Ltd.",
        "Shufersal Ltd.", "Shapir Engineering and Industry Ltd.", "Amot Investments Ltd.",
        "Delek Group Ltd.", "Energean plc", "Fattal Holdings (1998) Ltd.", "Strauss Group Ltd.",
        "Mivne Real Estate (K.D.) Ltd.", "OPC Energy Ltd.", "Y.D. More Investments Ltd.",
        "Enlight Renewable Energy Ltd.", "Israel Corporation Ltd.", "Airport City Ltd.",
        "Electra Ltd.", "Sapiens International Corporation N.V.", "Electra Consumer Products Ltd.",
        "Alony Hetz Properties & Investments Ltd.", "Gazit Globe Ltd.", "Isramco Negev 2 Limited Partnership",
        "Clal Insurance Enterprises Holdings Ltd.", "Delek Automotive Systems Ltd.",
        "El Al Israel Airlines Ltd.", "Israel Chemicals Ltd.", "Kenon Holdings Ltd.",
        "Kardan N.V.", "Koor Industries Ltd.", "Maalot S&P Global Ltd.", "Meitav Dash Investments Ltd.",
        "Menora Mivtachim Holdings Ltd.", "Mishorim Real Estate Investments Ltd."
    ];

    const list = document.getElementById("ta125List");
    if (list) {
        ta125Stocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#ta125List) not found.");
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
