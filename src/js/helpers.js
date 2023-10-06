function cycleNum(number, offset) {
    if (number + offset > 9) return 0;
    if (number + offset < 0) return 9;
    return number + offset;
}
