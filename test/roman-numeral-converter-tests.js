var chai = require('chai')
var assert = chai.assert

var converter = require('../src/roman-numeral-converter.js')

describe('Conversion tests', () => {
    it('should return "I" when 1 is input', () => {
        var input = 1
        var result = converter.convert(input)
        var expected = 'I'
        assert.equal(result, expected)
    })
})
