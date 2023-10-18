function cycleNum(number, offset, min, max) {
    if (number + offset > max) return min;
    if (number + offset < min) return max;
    return number + offset;
}
