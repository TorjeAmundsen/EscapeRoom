function createFinalDoorHTML() {
    return /*html*/ `
        <div
            class="final-door-wrapper"
            onmouseover="animateDoorOpen()"
            onmouseout="animateDoorClose()"
            onclick="handleDoorClick()"
        >
            <div class="final-door-inner ${isFinalDoorUnlocked()}"></div>
        </div>
    `;
}

function isFinalDoorUnlocked() {
    return model.room.southWall.finalDoor.isUnlocked ? "unlocked" : "";
}

function animateDoorOpen() {
    if (!model.room.southWall.finalDoor.isUnlocked) return;
    const root = document.querySelector(":root");
    root.style.setProperty("--final-door-width", "65%");
}

function animateDoorClose() {
    const root = document.querySelector(":root");
    root.style.setProperty("--final-door-width", "100%");
}
