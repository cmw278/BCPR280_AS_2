/* global describe it expect spyOnProperty beforeEach */
const { BivariateCalculator } = require('../index')
describe('Correlation:', () => {
  let actual
  beforeEach(() => {
    let x = [ 186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601 ]
    let y = [ 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2 ]
    actual = new BivariateCalculator(x, y)
  })
  it('should have sumXY getter', () => {
    const spySumXY = spyOnProperty(actual, 'sumXY', 'get')
      .and.callThrough()
    expect(actual.sumXY).toEqual(719914.4)
    expect(spySumXY).toHaveBeenCalled()
  }) // sumXY
  it('should have r getter', () => {
    const spyR = spyOnProperty(actual, 'r', 'get')
      .and.callThrough()
    expect(actual.r).toBeCloseTo(0.9543, 4)
    expect(spyR).toHaveBeenCalled()
  }) // r
  it('should have correlation getter', () => {
    const spyCorrelation = spyOnProperty(actual, 'correlation', 'get')
      .and.callThrough()
    expect(actual.correlation).toBeCloseTo(0.9107, 4)
    expect(spyCorrelation).toHaveBeenCalled()
  }) // correlation
}) // First describe
