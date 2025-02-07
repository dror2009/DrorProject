document.addEventListener("DOMContentLoaded", () => {
    const taBiomedStocks = [
        "CBI Ltd.",
        "Teva Pharmaceutical Industries Ltd.",
        "BioLineRx Ltd.",
        "Brainsway Ltd.",
        "Compugen Ltd.",
        "Evogene Ltd.",
        "Kamada Ltd.",
        "Tikun Olam Cannbit Pharmaceuticals Ltd.",
        "Endymed Ltd.",
        "Bio View Ltd.",
        "Capital Point Ltd.",
        "Purple Biotech Ltd.",
        "Bonus BioGroup Ltd.",
        "Rekah Pharmaceutical Industry Ltd.",
        "Seach Medical Group Ltd.",
        "Intercure Ltd.",
        "Pluri Inc.",
        "Opko Health Inc.",
        "DNA Group Ltd.",
        "Together Startup Network Ltd.",
        "Lineage Cell Therapeutics Inc.",
        "Oramed Pharmaceuticals Inc.",
        "Enlivex Therapeutics Ltd.",
        "Human Xtensions Ltd.",
        "Almeda Ventures Ltd.",
        "Sofwave Medical Ltd.",
        "Matricelf Ltd.",
        "Pulsenmore Ltd.",
        "Cannabotech Ltd.",
        "Epitomee Medical Ltd."
    ];


    const list = document.getElementById("tabiomedList");
    if (list) {
        taBiomedStocks.forEach(stock => {
            const listItem = document.createElement("li");
            listItem.textContent = stock;
            list.appendChild(listItem);
        });
    } else {
        console.error("Stock list container (#tabiomedList) not found.");
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
