function addToInventory(item) {
  model.player.inventory.push(item);
  updateView();
}

function removeFromInventory(index) {
  model.player.inventory.splice(index, 1);
  updateView();
}
