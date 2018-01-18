exports.generate = function (number) {
    if (number < 1) {
        return 'UNSUPPORTED'
    }
    if (number > 3999) {
        return 'UNSUPPORTED'
    }
    return numeralValues[number]
}

var numeralValues = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
}
