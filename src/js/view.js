function updateView() {
    const facingDirection = model.player.facingDirection;
    if (model.player.hasEscaped) {
        app.innerHTML = createEndScreen();
        return;
    }
    app.innerHTML = /*html*/ `
        ${createWallView(facingDirection)}
        ${createLogView()}
        ${createTurnButtons()}
        ${createItemImagesHTML()}
        
     `;
    /* ${createItemImagesHTML()} */
    scrollLogToSavedPosition();
}

function createWallView(facingDirection) {
    if (facingDirection === NORTH) {
        return createNorthView();
    }
    if (facingDirection === EAST) {
        return createEastView();
    }
    if (facingDirection === SOUTH) {
        return createSouthView();
    }
    if (facingDirection === WEST) {
        return createWestView();
    }
}

function createNorthView() {
    return /*html*/ `
        ${model.room.northWall.keyShown ? showKey() : ""}
        ${model.player.looksAtTranslator ? createForgroundSheet() : ""}

    `;
}
function createEastView() {
    return /*html*/ `
        <div class="safe">${findRightCombinationLock()}</div>
        ${!model.room.eastWall.runeTranslatorPickedUp ? createRuneTranslator() : ""}
        ${model.player.looksAtTranslator ? createForgroundSheet() : ""}
    `;
    s;
}

function createSouthView() {
    return /*html*/ `
        ${createFinalDoorHTML()}
        ${makeRuneSheet()}
        ${model.player.looksAtTranslator ? createForgroundSheet() : ""}

    `;
}
function createWestView() {
    return /*html*/ `
        <img src="src/img/clock.png" class="clock">
        ${model.player.looksAtTranslator ? createForgroundSheet() : ""}

    `;
}

function createEndScreen() {
    return /*html*/ `
        <div class="placeholder-text">You beat the game! Placeholder</div>
    `;
}

function scrollLogToSavedPosition() {
    const position = model.app.scrollPosition;
    const log = document.getElementById("log-container");
    log.scrollTop = position;
}

//runs updateView for the first time, when everything is ready. Less chance of crashing than just running it normaly the first time.
document.addEventListener("DOMContentLoaded", updateView);
