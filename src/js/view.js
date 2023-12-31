function updateView() {
    const facingDirection = model.player.facingDirection;
    if (model.player.hasEscaped) {
        app.innerHTML = createEndScreen();
        return;
    }
    app.innerHTML = /*html*/ `
        
        ${createLogView()}
        ${createTurnButtons()}
        <div class="blur-backdrop"></div>
        <div class="blur-container">
            ${createWallView(facingDirection)}
            ${createItemImagesHTML()}
        </div>
       
        
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
        ${model.player.looksAtTranslator ? createForgroundSheet() : ""}
    `;
}

function createEndScreen() {
    return /*html*/ `
        <div class="placeholder-text">You beat the game! Placeholder</div>
    `;
}

//runs updateView for the first time, when everything is ready. Less chance of crashing than just running it normaly the first time.
document.addEventListener("DOMContentLoaded", updateView);
