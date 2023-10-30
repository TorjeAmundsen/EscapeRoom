function handleDoorClick() {
    const door = model.room.southWall.finalDoor;
    const player = model.player;
    if (door.isUnlocked) {
        model.player.hasEscaped = true;
        updateView();
        return;
    }
    if (player.selectedItemIndex !== null) {
        if (model.player.inventory[model.player.selectedItemIndex].id === 1) {
            model.room.southWall.finalDoor.isUnlocked = true;
            addToLog("The key fit, and the door unlocked!");
            player.inventory.splice(player.selectedItemIndex, 1);
            updateView();
            return;
        }
    }
    if (!door.playerHasClicked) {
        addToLog("Seems like you'll need a key to open this door...");
        door.playerHasClicked = true;
        updateView();
    }
}
