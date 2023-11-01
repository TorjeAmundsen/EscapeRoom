function createRuneTranslator() {
    if (model.room.eastWall.runeTranslatorPickedUp) return "";
    return /*html*/ `
        <img
            class="rune-translator"
            src="src/img/sheet.png"
            onclick="getRuneTranslator()"
        >
    `;
}

function createForgroundSheet() {
    console.log("createForgroundSheet started");
    return /*html*/ `
    <img src="src/img/AngloSaxonRunes.jpg" class="forground-sheet" onclick="removeForgroundSheet()">
    `;
}

function removeForgroundSheet() {
    model.player.looksAtTranslator = false;
    model.player.selectedItemIndex = null;
    updateView();
}

/* if (playerHasItem(3)) {
    model.items[3]addEventListener("click", createtransImage)
}
function createtransImage() {
    const img = document.createElement("img");
    console.log("the if statement works if this comes in the console")
    img.src = ""
} */ //vet ikke om denne funker
