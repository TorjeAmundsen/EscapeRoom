function findRightCombinationLock() {
    if (model.room.eastWall.combinationLock.isBroken) {
        return createBrokenCombinationLock();
    }
    if (model.player.inventory[model.player.selectedItemIndex]?.name != "pickaxe") {
        console.log("not Broken and not Pickaxe");
        return createCombinationLock();
    }
    return createBreakableCombinationLock();
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
    const lock = model.room.eastWall.combinationLock;
    let innerLocks = "";
    for (let i = 0; i < 4; i++) {
        innerLocks += /*html*/ `
                <div class="combination-lock-inner">
                    <div>M</div>
                    <div class="combination-lock-number">
                    H
                    </div>
                    <div>W</div>
                </div>
            `;
    }
    return /*html*/ `
            <div class="combination-lock-container">
                ${innerLocks}
            </div>
        `;
}
