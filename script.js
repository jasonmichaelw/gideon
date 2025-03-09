function toggleAbbreviations() {
    const abbreviations = document.getElementById("olympiad-abbreviations");
    if (abbreviations.style.display === "none") {
        abbreviations.style.display = "block";
    } else {
        abbreviations.style.display = "none";
    }
}
