const app = document.getElementById("app");
/*
const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;
*/

function updateView() {
    const facingDirection = model.player.facingDirection;
    app.innerHTML = /*html*/ `
        ${createLogView()}
        ${createWallView(facingDirection)}
        ${createTurnButtons(facingDirection)}
    `;
    const log = document.getElementById("log-container");
    log.addEventListener("scroll", saveScrollPosition);
}

function createWallView(facingDirection) {
    if (facingDirection == NORTH) {
        //temp message for testing
        addToLog("Nothing to se in this direction");
        return /*html*/ `

        `;
    }
    if (facingDirection == "east") {
        return /*html*/ `
            ${createCombinationLock()}
        `;
    }
    if (facingDirection == "south") {
        //also test message
        addToLog(room.radioLines.shift());
        return /*html*/ `
            
        `;
    }
    if (facingDirection == "west") {
        return /*html*/ `
            
        `;
    }
}

function scrollLogToSavedPosition() {
    const position = model.app.scrollPosition;
    if (position === null) return;
    const log = document.getElementById("log-container");
    log.scrollTo({
        top: position,
    });
}

document.addEventListener("DOMContentLoaded", updateView);
