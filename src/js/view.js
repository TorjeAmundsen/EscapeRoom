function updateView() {
    const facingDirection = model.player.facingDirection;
    app.innerHTML = /*html*/ `
        ${createWallView(facingDirection)}
        ${createLogView()}
        ${createTurnButtons()}
        
     `;
    /* ${createItemImagesHTML()} */
    scrollLogToSavedPosition();
}

function createWallView(facingDirection) {
    if (facingDirection === NORTH) {
        //temp message for testing
        addToLog("Nothing to see in this direction");
        return /*html*/ `
            <div class="placeholder-text">NORTH PLACEHOLDER</div>
        `;
    }
    if (facingDirection === EAST) {
        return /*html*/ `
            <div class="placeholder-text">EAST PLACEHOLDER</div>
            ${createCombinationLock()}
        `;
    }
    if (facingDirection === SOUTH) {
        //also test message
        /* addToLog(model.room.global.radioLines.shift()); */
        return /*html*/ `
            <div class="placeholder-text">SOUTH PLACEHOLDER</div>
        `;
    }
    if (facingDirection === WEST) {
        return /*html*/ `
            <div class="placeholder-text">WEST PLACEHOLDER</div>
        `;
    }
}

function scrollLogToSavedPosition() {
    const position = model.app.scrollPosition;
    const log = document.getElementById("log-container");
    log.scrollTop = position;
}

//runs updateView for the first time, when everything is ready. Less chance of crashing than just running it normaly the first time.
document.addEventListener("DOMContentLoaded", updateView);
