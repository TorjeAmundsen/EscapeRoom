function makeRuneSheet() {
    console.log(playerHasItem(3));
    if (!playerHasItem(3)) {
        return /*html*/ `
            <div class="hidden-runes">
                ᚺᛖᛚᛚᛟ × ᛗᛁᛞᚷᚨᚱᛞ
            </div>
        `;
    } else {
        return /*html*/ `
            <div class="rune-sheet">
                ᚺᛖᛚᛚᛟ × ᛗᛁᛞᚷᚨᚱᛞ
            </div>
        `;
    }
}
