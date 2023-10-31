function addToInventory(item) {
    model.player.inventory.push(item);
}

function removeFromInventory(index) {
    model.player.inventory.splice(index, 1);
}
