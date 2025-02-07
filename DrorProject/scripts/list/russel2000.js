document.addEventListener("DOMContentLoaded", () => {
    const russell2000Stocks = [
        "Super Micro Computer, Inc.", "Matador Resources Company", "Chord Energy Corporation",
        "ShockWave Medical, Inc.", "Lantheus Holdings, Inc.", "Sarepta Therapeutics, Inc.",
        "Enphase Energy, Inc.", "Novavax, Inc.", "Repligen Corporation", "Halozyme Therapeutics, Inc.",
        "Chegg, Inc.", "Plug Power Inc.", "Upwork Inc.", "Teladoc Health, Inc.", "DraftKings Inc.",
        "Roku, Inc.", "Wayfair Inc.", "Beyond Meat, Inc.", "SmileDirectClub, Inc.",
        "Peloton Interactive, Inc.", "ZoomInfo Technologies Inc.", "Five9, Inc.",
        "RingCentral, Inc.", "Cloudflare, Inc.", "Datadog, Inc.", "Asana, Inc.", "Fastly, Inc.",
        "Twilio Inc.", "MongoDB, Inc.", "Snowflake Inc.", "Palantir Technologies Inc.",
        "Unity Software Inc.", "Affirm Holdings, Inc.", "DoorDash, Inc.", "Coinbase Global, Inc.",
        "Roblox Corporation", "Bumble Inc.", "Warby Parker Inc.", "Allbirds, Inc.",
        "Rent the Runway, Inc.", "ThredUp Inc.", "Poshmark, Inc.", "Stitch Fix, Inc.",
        "Blue Apron Holdings, Inc.", "FuboTV Inc.", "Skillz Inc.", "DraftKings Inc.",
        "Virgin Galactic Holdings, Inc.", "Nikola Corporation", "Lordstown Motors Corp."
    ];


    const list = document.getElementById("russList");
    if (list) {
        russell2000Stocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#russList) not found.");
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
