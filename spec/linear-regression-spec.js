/* global describe it expect spyOn spyOnProperty beforeEach */
const { BivariateCalculator } = require('../src/bivariate-calculator')
describe('Linear regression:', () => {
  var actual
  beforeEach(() => {
    var x = [ 130, 650, 99, 150, 128, 302, 95, 945, 368, 961 ]
    var y = [ 186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601 ]
    actual = new BivariateCalculator(x, y)
  })
  it('should have beta1 getter', () => {
    const spyBeta1 = spyOnProperty(actual, 'beta1', 'get')
      .and.callThrough()
    expect(actual.beta1).toBeCloseTo(1.7279, 4)
    expect(spyBeta1).toHaveBeenCalled()
  }) // beta1
  it('should have beta0 getter', () => {
    const spyBeta0 = spyOnProperty(actual, 'beta0', 'get')
      .and.callThrough()
    expect(actual.beta0).toBeCloseTo(-22.5525, 4)
    expect(spyBeta0).toHaveBeenCalled()
  }) // beta0
  it('should have predictNextY function', () => {
    const spyPredictNextY = spyOn(actual, 'predictNextY')
      .and.callThrough()
    expect(actual.predictNextY(389)).toBeCloseTo(649.6132, 4)
    expect(spyPredictNextY).toHaveBeenCalled()
  }) // predictNextY
}) // First describe
