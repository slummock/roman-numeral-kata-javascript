exports.generate = function (number) {
    var romanNumeral = 'UNSUPPORTED'
    if (validateInput(number)) {
        romanNumeral = convertNumberToNumeral(number)
    }
    return romanNumeral
}

function convertNumberToNumeral (number) {
    var numeralValues = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    return numeralValues[number]
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
