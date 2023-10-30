function getKey() {
    if (model.player.canReachHigher) {
        addToInventory(model.items[1]);
        model.room.northWall.keyShown = "";
    } else {
        addToLog("You can't reach that");
    }
    updateView();
}
