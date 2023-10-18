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

        `;
    }
    if (facingDirection === EAST) {
        return /*html*/ `
            ${createCombinationLock()}
        `;
    }
    if (facingDirection === SOUTH) {
        //also test message
        /* addToLog(model.room.global.radioLines.shift()); */
        return /*html*/ `
            
        `;
    }
    if (facingDirection === WEST) {
        return /*html*/ `
            
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
