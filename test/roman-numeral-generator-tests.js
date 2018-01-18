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
})
