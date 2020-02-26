
exports.min = function min(array) {
    return Array.isArray(array) && array.length ?
        array.reduce(
            (minNumber, currentNumber) => {
                if (minNumber < currentNumber) {
                    return minNumber;
                } else return currentNumber;
            }
        ) : 0;
}

exports.max = function max(array) {
    return Array.isArray(array) && array.length ?
        array.reduce(
            (maxNumber, currentNumber) => {
                if (maxNumber > currentNumber) {
                    return maxNumber;
                } else return currentNumber;
            }
        ) : 0;
}

exports.avg = function avg(array) {
    return Array.isArray(array) && array.length ?
        array.reduce(
            (sumNumber, currentNumber) => sumNumber + currentNumber
        ) / array.length : 0;
}
