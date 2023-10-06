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
