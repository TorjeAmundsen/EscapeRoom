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
