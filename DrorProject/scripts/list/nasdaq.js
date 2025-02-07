document.addEventListener("DOMContentLoaded", () => {
    const nasdaqCompositeStocks = [
        "Apple Inc.", "Microsoft Corporation", "Amazon.com, Inc.", "Alphabet Inc. (Class A)",
        "Alphabet Inc. (Class C)", "Meta Platforms, Inc.", "Tesla, Inc.", "NVIDIA Corporation",
        "PepsiCo, Inc.", "Costco Wholesale Corporation", "Broadcom Inc.", "Adobe Inc.",
        "Cisco Systems, Inc.", "Intel Corporation", "Comcast Corporation", "Netflix, Inc.",
        "ASML Holding N.V.", "Advanced Micro Devices, Inc.", "PayPal Holdings, Inc.",
        "Qualcomm Incorporated", "Starbucks Corporation", "Charter Communications, Inc.",
        "Intuit Inc.", "Texas Instruments Incorporated", "Applied Materials, Inc.",
        "Pinduoduo Inc.", "Booking Holdings Inc.", "Analog Devices, Inc.", "Lam Research Corporation",
        "Micron Technology, Inc.", "Automatic Data Processing, Inc.", "Gilead Sciences, Inc.",
        "KLA Corporation", "Marvell Technology, Inc.", "Moderna, Inc.", "Illumina, Inc.",
        "Zoom Video Communications, Inc.", "DocuSign, Inc.", "Match Group, Inc.",
        "Datadog, Inc.", "Atlassian Corporation", "CrowdStrike Holdings, Inc.", "Zscaler, Inc.",
        "Okta, Inc.", "MongoDB, Inc.", "Snowflake Inc.", "Roku, Inc.", "Trade Desk, Inc.",
        "Uber Technologies, Inc.", "Lyft, Inc."
    ];

    const list = document.getElementById("nasdaqList");
    if (list) {
        nasdaqCompositeStocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#nasdaqList) not found.");
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
