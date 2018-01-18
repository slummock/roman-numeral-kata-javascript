var chai = require('chai')
var assert = chai.assert

var numeralGenerator = require('../src/roman-numeral-generator.js')

function runNumberToNumeralTestCase (testCases) {
    testCases.forEach(function (testCase) {
        it('should return ' + testCase.result + ' when input is' + testCase.input, () => {
            assert.equal(numeralGenerator.generate(testCase.input), testCase.result)
        })
    })
}

describe('Conversion of each individual numeral symbol', () => {
    var testCases =
        [
            { input: 1, result: 'I' },
            { input: 5, result: 'V' },
            { input: 10, result: 'X' },
            { input: 50, result: 'L' },
            { input: 100, result: 'C' },
            { input: 500, result: 'D' },
            { input: 1000, result: 'M' }
        ]

    runNumberToNumeralTestCase(testCases)
})

describe('Conversion of numerals with multiple symbols', () => {
    var testCases =
        [
            { input: 20, result: 'XX' },
            { input: 30, result: 'XXX' },
            { input: 7, result: 'VII' },
            { input: 55, result: 'LV' },
            { input: 27, result: 'XXVII' },
            { input: 1300, result: 'MCCC' }
        ]

    runNumberToNumeralTestCase(testCases)
})

describe('Conversion of numerals with subtractive notation', () => {
    var testCases =
        [
            { input: 4, result: 'IV' },
            { input: 9, result: 'IX' },
            { input: 40, result: 'XL' },
            { input: 90, result: 'XC' },
            { input: 400, result: 'CD' },
            { input: 900, result: 'CM' },
            { input: 3999, result: 'MMMCMXCIX' }
        ]

    runNumberToNumeralTestCase(testCases)
})

describe('Unsupported cases, input outside of 1-3999 range', function () {
    var testCases =
        [
            { input: 0, result: 'UNSUPPORTED' },
            { input: 4000, result: 'UNSUPPORTED' }
        ]

    runNumberToNumeralTestCase(testCases)
})
