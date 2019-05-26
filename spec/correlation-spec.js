/* global describe it xit expect spyOnProperty beforeEach */
const { Correlation } = require('../src/correlation')
describe('Correlation class', () => {
  var actual
  beforeEach(() => {
    var x = [ 160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503 ]
    var y = [ 186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601 ]
    actual = new Correlation(x, y)
  })
  it('should be defined', () => {
    expect(Correlation).toBeDefined()
  }) // Definition
  it('should throw an error if the arrays are not the same length', () => {
    function throwMe () {
      return new Correlation([1, 2], [3])
    }
    expect(throwMe).toThrow()
  }) // Array length error
  xit('should have getters defined', () => {
    // Spies
    const spySumXY = spyOnProperty(actual, 'sumXY', 'get')
      .and.returnValue('sumXY requested')

    const spyR = spyOnProperty(actual, 'r', 'get')
      .and.returnValue('r requested')

    const spyRSquared = spyOnProperty(actual, 'rSquared', 'get')
      .and.returnValue('rSquared requested')

    // Results
    expect(actual.sumXY).toBe('sumXY requested')
    expect(spySumXY).toHaveBeenCalled()

    expect(actual.r).toBe('r requested')
    expect(spyR).toHaveBeenCalled()

    expect(actual.rSquared).toBe('rSquared requested')
    expect(spyRSquared).toHaveBeenCalled()
  }) // Getters
  xit('getters should return correct values', () => {
    expect(actual.sumXY).toEqual(6731722)
    expect(actual.r).toEqual(0.997834067)
    expect(actual.rSquared).toEqual(0.995672824)
  }) // Getter values
}) // First describe
