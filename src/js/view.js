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
        <div class="placeholder-text">
            NORTH PLACEHOLDER
            <div class="box test-right"></div>
            <div class="box test-left"></div>
        </div>
    `;
}
function createEastView() {
    return /*html*/ `
        <div class="placeholder-text">EAST PLACEHOLDER</div>
        ${findRightCombinationLock()}
    `;
}
function createSouthView() {
    return /*html*/ `
        <div class="placeholder-text">SOUTH PLACEHOLDER</div>
        ${model.room.southWall.redbullShown}
        ${createFinalDoorHTML()}
    `;
}
function createWestView() {
    return /*html*/ `
    <div class="placeholder-text">WEST PLACEHOLDER</div>
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
