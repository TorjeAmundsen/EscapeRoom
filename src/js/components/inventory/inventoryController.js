function setSelectedItem(i) {
    console.log("setSelectedItem(", i, ") started");
    model.player.selectedItemIndex = i;
    console.log("updated selectedItemIndex is ", model.player.selectedItemIndex);
    updateView();
}

function addToInventory(item) {
    model.player.inventory.push(item);
    addToLog(item.pickupMsg);
    updateView();
}

function removeFromInventory(index) {
    model.player.inventory.splice(index, 1);
    updateView();
}
