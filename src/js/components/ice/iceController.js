function meltIce() {
    model.room.global.iceMelted = true;
    model.app.log.push("Oh, the ice melted!");
    updateView();
}
