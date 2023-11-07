function changeFacingDirection(offset) {
    model.player.facingDirection = cycleNum(model.player.facingDirection, offset, 0, 3);
    const root = document.querySelector(":root");
    root.style.setProperty("--room-image", `url("../img/room${model.player.facingDirection}.png")`);
    root.style.setProperty("--blur-timer", "0.3s");
    setTimeout(() => {
        root.style.setProperty("--blur-timer", "0s");
    }, 350);
    updateView();
}
