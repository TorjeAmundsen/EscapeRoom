function changeCombination(index, offset) {
    const lock = model.room.eastWall.combinationLock;
    lock.currentCombination[index] = cycleNum(lock.currentCombination[index], offset, 0, 9);
    checkCombination();
    updateView();
}

function checkCombination() {
    const lock = model.room.eastWall.combinationLock;
    const currentCombination = model.room.eastWall.combinationLock.currentCombination;
    for (let i = 0; i < lock.password.length; i++) {
        //
        if (lock.password[i] !== currentCombination[i]) {
            return;
        }
    }
    lock.isUnlocked = true;
    document
        .querySelector(":root")
        .style.setProperty("--combination-lock-bg", "hsl(219, 42%, 19%)");
    addToLog("The lock opened!");
}

function breakLock() {
    addToLog("I managed to break into the combinationlock. Good they used thin plastic to make it");
    model.room.eastWall.combinationLock.isBroken = true;
    updateView();
}

function openCombinationLock() {
    addToLog("I managed to open the combinationlock. What is inside?");
    model.room.eastWall.combinationLock.isOpen = true;
    updateView();
}
