exports.generate = function (number) {
    var romanNumeral = 'UNSUPPORTED'
    if (validateInput(number)) {
        romanNumeral = convertNumberToNumeral(number)
    }
    return romanNumeral
}

function convertNumberToNumeral (number) {
    var numeralValue = ''
    while (number >= 1000) {
        numeralValue += 'M'
        number -= 1000
    }
    while (number >= 500) {
        numeralValue += 'D'
        number -= 500
    }
    while (number >= 100) {
        numeralValue += 'C'
        number -= 100
    }
    while (number >= 50) {
        numeralValue += 'L'
        number -= 50
    }
    while (number >= 10) {
        numeralValue += 'X'
        number -= 10
    }
    while (number >= 5) {
        numeralValue += 'V'
        number -= 5
    }
    while (number >= 1) {
        numeralValue += 'I'
        number -= 1
    }
    return numeralValue
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
