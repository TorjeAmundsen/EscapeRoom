function getRuneTranslator() {
    addToInventory(model.items[3]);
    model.room.eastWall.runeTranslatorPickedUp = true;
    updateView();
}

function testForTranslator() {
    console.log("there should be a test running when we have made it");
}
