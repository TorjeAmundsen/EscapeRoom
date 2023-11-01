function makeRuneSheet() {
    console.log(playerHasItem(3));
    if (!playerHasItem(3)) {
        return /*html*/ `
            <div class="hidden-runes">
            ᛚᛖᛏ ᛏᛁᛗᛖ ᛏᛖᛚᛚ
            </div>
        `;
    } else {
        return /*html*/ `
            <div class="rune-sheet">
            ᛚᛖᛏ ᛏᛁᛗᛖ ᛏᛖᛚᛚ
            </div>
        `;
    }
}
