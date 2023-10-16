function meltIce() {
    model.room.global.iceMelted = true;
    model.app.log.push({
        message: "Oh, the ice melted!",
        timestamp: new Date(),
    });
    updateView();
}
