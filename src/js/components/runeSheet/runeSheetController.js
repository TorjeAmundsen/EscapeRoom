function getRuneTranslator() {
    addToInventory(model.items[3]);
    model.room.eastWall.runeTranslatorPickedUp = true;
    updateView();
}

function testForTranslator() {
    if (model.player.inventory[model.player.selectedItemIndex].id === 3) {
        model.player.looksAtTranslator = true;
    }
    updateView();
}
