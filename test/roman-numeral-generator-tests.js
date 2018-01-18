var chai = require('chai')
var assert = chai.assert

var numeralGenerator = require('../src/roman-numeral-generator.js')

describe('Conversion of each individual symbol', () => {
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

    testCases.forEach(function (testCase) {
        it('should return ' + testCase.result + ' when ' + testCase.input + ' is input', () => {
            assert.equal(numeralGenerator.generate(testCase.input), testCase.result)
        })
    })
})

describe('Conversion of Numeral with multiple symbols', () => {
    var testCases =
        [
            { input: 20, result: 'XX' }
        ]

    testCases.forEach(function (testCase) {
        it('should return ' + testCase.result + ' when ' + testCase.input + ' is input', () => {
            assert.equal(numeralGenerator.generate(testCase.input), testCase.result)
        })
    })
})

describe('Unsupported cases, input outside of 1-3999 range', function () {
    it('should return UNSUPPORTED when 0 is input', function () {
        var input = 0
        var expected = 'UNSUPPORTED'

        var result = numeralGenerator.generate(input)

        assert.equal(result, expected)
    })

    it('should return UNSUPPORTED when 4000 is input', function () {
        var input = 4000
        var expected = 'UNSUPPORTED'

        var result = numeralGenerator.generate(input)

        assert.equal(result, expected)
    })
})
