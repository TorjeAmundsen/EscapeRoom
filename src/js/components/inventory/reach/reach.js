function drinkRedBull() {
    model.player.canReachHigher = true;
    addToInventory(model.items[2]);
    model.room.southWall.redbullShown = "";
    addToLog("Red Bull gives you wings!");
    updateView();
}

function useChair() {
    canReachHigher = true;
}

function loseurWings() {
    canReachHigher = false;
    console.log("Your wings disappeared...");
}
