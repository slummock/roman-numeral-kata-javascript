exports.generate = function (number) {
    var romanNumeral = 'UNSUPPORTED'
    if (validateInput(number)) {
        romanNumeral = numeralValues[number]
    }
    return romanNumeral
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

function validateInput (number) {
    var validInput = true
    if (number < 1) {
        validInput = false
    }
    if (number > 3999) {
        validInput = false
    }
    return validInput
}
