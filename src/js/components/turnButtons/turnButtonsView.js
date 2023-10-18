function createTurnButtons() {
    //RIGHT = 1
    //LEFT = -1
    return /*html*/ `
        <button class="turn-button right" onclick="changeFacingDirection(RIGHT)">▶</button>
        <button class="turn-button" onclick="changeFacingDirection(LEFT)">◀</button>
    `;
}
// north = 0, east = 1, south = 2, west = 3
