/* global describe it expect spyOnProperty beforeEach */
const { Correlation } = require('../src/correlation')
describe('Correlation class:', () => {
  var actual
  beforeEach(() => {
    var x = [ 186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601 ]
    var y = [ 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2 ]
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
  it('should have getters defined', () => {
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
  it('should return correct values', () => {
    expect(actual.r).toBeCloseTo(0.9543, 4)
    expect(actual.rSquared).toBeCloseTo(0.9107, 4)
  }) // Getter values
}) // First describe
