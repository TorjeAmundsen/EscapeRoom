function changeFacingDirection(offset) {
    const cardinals = ["North", "East", "South", "West"];
    let direction = "left";
    if (offset === 1) direction = "right";

    model.player.facingDirection = cycleNum(model.player.facingDirection, offset, 0, 3);

    console.log(
        `You turned ${direction} and are now facing`,
        cardinals[model.player.facingDirection]
    );
    updateView();
}
