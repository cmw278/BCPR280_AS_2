/* global describe it xit expect spyOnProperty beforeEach jasmine */
const { ArrayMath } = require('../src/array-math.js')
describe('ArrayMath class', () => {
  var actual
  beforeEach(() => {
    var x = [ 1, 2, 3, 4, 5 ]
    actual = new ArrayMath(...x)
  })
  it('should be defined', () => {
    expect(ArrayMath).toBeDefined()
  }) // Definition
  it('should be an accessible array', () => {
    expect(actual).toEqual(jasmine.any(Array))
    expect(actual).toEqual([ 1, 2, 3, 4, 5 ])
  }) // Accessible array
  xit('should have getters defined', () => {
    // Spies
    const spySum = spyOnProperty(actual, 'sum', 'get')
      .and.returnValue('sum requested')

    const spySquareSum = spyOnProperty(actual, 'squareSum', 'get')
      .and.returnValue('squareSum requested')

    // Results
    expect(actual.sum).toBe('sum requested')
    expect(spySum).toHaveBeenCalled()

    expect(actual.SquareSum).toBe('squareSum requested')
    expect(spySquareSum).toHaveBeenCalled()
  }) // Getters
  xit('getters should return correct values', () => {
    expect(actual.sum).toEqual(15)
    expect(actual.squareSum).toEqual(55)
  })
}) // First describe
