/* global describe it expect spyOnProperty beforeEach jasmine */
const { ArrayMath } = require('../src/array-math')
describe('ArrayMath class', () => {
  var actual
  beforeEach(() => {
    var x = [ 1, 2, 3, 4, 5 ]
    actual = new ArrayMath(x)
  })
  it('should be defined', () => {
    expect(ArrayMath).toBeDefined()
  }) // Definition
  it('should be an accessible array', () => {
    expect(actual).toEqual(jasmine.any(Array))
    expect(actual).toEqual([ 1, 2, 3, 4, 5 ])
  }) // Accessible array
  it('should have sum getter', () => {
    const spySum = spyOnProperty(actual, 'sum', 'get')
      .and.callThrough()
    expect(actual.sum).toEqual(15)
    expect(spySum).toHaveBeenCalled()
  }) // sum
  it('should have mean getter', () => {
    const spyMean = spyOnProperty(actual, 'mean', 'get')
      .and.callThrough()
    expect(actual.mean).toEqual(3)
    expect(spyMean).toHaveBeenCalled()
  }) // mean
  it('should have squareSum getter', () => {
    const spySquareSum = spyOnProperty(actual, 'squareSum', 'get')
      .and.callThrough()
    expect(actual.squareSum).toEqual(55)
    expect(spySquareSum).toHaveBeenCalled()
  }) // squareSum
  it('should have variance getter', () => {
    const spyVariance = spyOnProperty(actual, 'variance', 'get')
      .and.callThrough()
    expect(actual.variance).toEqual(50)
    expect(spyVariance).toHaveBeenCalled()
  }) // actual
}) // First describe
