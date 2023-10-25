function drinkRedBull() {
    model.player.canReachHigher = true;
    addToInventory(model.items[2]);
    model.room.southWall.redbullShown = "";
    console.log("REDBULL GIR DEG VINGER");
    updateView();
}

function useChair() {
    canReachHigher = true;
}

function loseurWings() {
    canReachHigher = false;
    console.log("You have lost you're wings");
}
