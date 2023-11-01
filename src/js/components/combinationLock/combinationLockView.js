function findRightCombinationLock() {
    const lock = model.room.eastWall.combinationLock;
    if (lock.isBroken) {
        return createBrokenCombinationLock();
    }
    if (lock.isUnlocked) {
        return createOpenCombinationLock();
    }
    if (model.player.inventory[model.player.selectedItemIndex]?.name == "pickaxe") {
        return createBreakableCombinationLock();
    }
    return createCombinationLock();
}

function createCombinationLock() {
    const lock = model.room.eastWall.combinationLock;
    let innerLocks = "";
    for (let i = 0; i < 4; i++) {
        innerLocks += /*html*/ `
            <div class="combination-lock-inner">
                <button
                    ${lock.isUnlocked && "disabled"}
                    onclick="changeCombination(${i}, 1)"
                >
                    ▲
                </button>
                <div class="combination-lock-number">
                    ${lock.currentCombination[i]}
                </div>
                <button
                    ${lock.isUnlocked && "disabled"}
                    onclick="changeCombination(${i}, -1)"
                >
                    ▼
                </button>
            </div>
        `;
    }
    // <div> ᛏᛖᚱᛃᛖ </div>
    return /*html*/ `
        <div class="combination-lock-container">
        ${innerLocks}
        </div>
    `;
}

function createBreakableCombinationLock() {
    const lock = model.room.eastWall.combinationLock;
    let innerLocks = "";
    for (let i = 0; i < 4; i++) {
        innerLocks += /*html*/ `
                <div class="combination-lock-inner">
                    <button
                        ${lock.isUnlocked && "disabled"}
                        onclick="changeCombination(${i}, 1)"
                    >
                        ▲
                    </button>
                    <div class="combination-lock-number">
                        ${lock.currentCombination[i]}
                    </div>
                    <button
                        ${lock.isUnlocked && "disabled"}
                        onclick="changeCombination(${i}, -1)"
                    >
                        ▼
                    </button>
                </div>
            `;
    }
    return /*html*/ `
            <div class="combination-lock-container" onclick="breakLock()">
        ${innerLocks}
            </div>
        `;
}

function createBrokenCombinationLock() {
    return /*html*/ `
            <div class="combination-lock-container">
            ${model.room.southWall.redbullShown}
            </div>
        `;
}

function createOpenCombinationLock() {
    return /*html*/ `
            <div class="combination-lock-container">
            ${model.room.southWall.redbullShown}

            </div>
        `;
}
