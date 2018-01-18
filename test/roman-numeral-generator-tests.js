var chai = require('chai')
var assert = chai.assert

var numeralGenerator = require('../src/roman-numeral-generator.js')

describe('Conversion tests', () => {
    it('should return "I" when 1 is input', () => {
        var input = 1
        var result = numeralGenerator.generate(input)
        var expected = 'I'
        assert.equal(result, expected)
    })
    it('should return "V" when 5 is input', () => {
        var input = 5
        var result = numeralGenerator.generate(input)
        var expected = 'V'
        assert.equal(result, expected)
    })
})

describe('Test case conversion tests', () => {
    var testCases =
        [
            { input: 1, result: 'I' },
            { input: 5, result: 'V' },
            { input: 10, result: 'X' },
            { input: 20, result: 'XX' },
            { input: 3999, result: 'MMMCMXCIX' }
        ]

    testCases.forEach(function (testCase) {
        console.log(testCase)
        it('should return ' + testCase.result + ' when ' + testCase.input + ' is input', () => {
            var input = testCase.input
            var result = numeralGenerator.generate(input)
            var expected = testCase.result
            assert.equal(result, expected)
        })
    })
})
