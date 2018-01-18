var chai = require('chai')
var assert = chai.assert

var numeralGenerator = require('../src/roman-numeral-generator.js')

describe('Conversion tests', () => {
    it('should return "I" when 1 is input', () => {
        var input = 1
        var expected = 'I'

        var result = numeralGenerator.generate(input)

        assert.equal(result, expected)
    })
    it('should return "V" when 5 is input', () => {
        var input = 5
        var expected = 'V'

        var result = numeralGenerator.generate(input)

        assert.equal(result, expected)
    })
})

describe('Test case conversion tests', () => {
    var testCases =
        [
            { input: 1, result: 'I' },
            { input: 5, result: 'V' },
            { input: 10, result: 'X' },
            { input: 20, result: 'XX' }
        ]

    testCases.forEach(function (testCase) {
        console.log(testCase)
        it('should return ' + testCase.result + ' when ' + testCase.input + ' is input', () => {
            assert.equal(numeralGenerator.generate(testCase.input), testCase.result)
        })
    })
})

describe('Unsupported cases', function () {
    it('should return UNSUPPORTED when 0 is input', function () {
        var input = 0
        var expected = 'UNSUPPORTED'

        var result = numeralGenerator.generate(input)

        assert.equal(result, expected)
    })
})
