function createFinalDoorHTML() {
    return /*html*/ `
        <div
            class="final-door-wrapper"
            onmouseover="animateDoorOpen()"
            onmouseout="animateDoorClose()"
            onclick="openFinalDoor()"
        >
            <div class="final-door-inner unlocked" ></div>
        </div>
    `;
}

function animateDoorOpen() {
    const root = document.querySelector(":root");
    root.style.setProperty("--final-door-width", "65%");
}

function animateDoorClose() {
    const root = document.querySelector(":root");
    root.style.setProperty("--final-door-width", "100%");
}
