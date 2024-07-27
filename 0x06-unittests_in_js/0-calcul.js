function calculateNumber(a, b) {
    const aNumber = Math.round(a);
    const bNumber = Math.round(b);
    const c = aNumber + bNumber;
    return c;
}

module.exports = calculateNumber;
