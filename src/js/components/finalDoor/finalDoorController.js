function openFinalDoor() {
    /* if (!model.room.southWall.finalDoor.isUnlocked) return; */
    // Uncomment this once we have functionality that unlocks the door at some point

    model.player.hasEscaped = true;
    updateView();
}
