exports.generate = function (number) {
    return validRange(number) ? convertNumberToNumeral(number) : 'UNSUPPORTED'  
}

var numeralValueMap = [
    { number: 1000, symbol: 'M' },
    { number: 900, symbol: 'CM' },
    { number: 500, symbol: 'D' },
    { number: 400, symbol: 'CD' },
    { number: 100, symbol: 'C' },
    { number: 90, symbol: 'XC' },
    { number: 50, symbol: 'L' },
    { number: 40, symbol: 'XL' },
    { number: 10, symbol: 'X' },
    { number: 9, symbol: 'IX' },
    { number: 5, symbol: 'V' },
    { number: 4, symbol: 'IV' },
    { number: 1, symbol: 'I' }
]

function convertNumberToNumeral(number) {
    var numeralResult = ''
    numeralValueMap.forEach(function (numeralValue) {
        while (number >= numeralValue.number) {
            numeralResult += numeralValue.symbol
            number -= numeralValue.number
        }
    })
    return numeralResult
}

function validRange(number) {
    return (number >= 1 && number <= 3999) ? true : false
}
