function cycleNum(number, offset, min, max) {
    if (number + offset > max) return min;
    if (number + offset < min) return max;
    return number + offset;
}

function playerHasItem(itemId) {
    for (const item of model.player.inventory) {
        if (item.id === itemId) return true;
    }
    return false;
}
