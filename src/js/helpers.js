function isCombinationCorrect() {
    const password = model.room.eastWall.password;
    const currentCombination = model.room.eastWall.currentCombination;
    for (let i = 0; i < password.length; i++) {
        if (password[i] !== currentCombination[i]) return false;
    }
    return true;
}

function cycleNum(number, offset) {
    if (number + offset > 9) return 0;
    if (number + offset < 0) return 9;
    return number + offset;
}
