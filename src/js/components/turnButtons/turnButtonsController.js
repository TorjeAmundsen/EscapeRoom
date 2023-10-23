function changeFacingDirection(offset) {
    const cardinals = ["North", "East", "South", "West"];
    let direction = "left";
    if (offset === 1) direction = "right";

    model.player.facingDirection = cycleNum(model.player.facingDirection, offset, 0, 3);

    console.log(
        `You turned ${direction} and are now facing`,
        cardinals[model.player.facingDirection]
    );
    runWallPrerequisites();
    updateView();
}

function runWallPrerequisites() {
    if (model.player.facingDirection === NORTH) {
        addToLog("Nothing to see in this direction");
    } else if (model.player.facingDirection === EAST) {
    } else if (model.player.facingDirection === SOUTH) {
        if (model.room.global.radioLines.length) addToLog(model.room.global.radioLines.shift());
    } else if (model.player.facingDirection === WEST) {
    }
}
