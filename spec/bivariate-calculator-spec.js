/* global describe beforeEach it expect spyOnProperty spyOn */
const { BivariateCalculator } = require('../index')
describe('BivariateCalculator class:', () => {
  let actual
  beforeEach(() => {
    let x = [1, 2]
    let y = [4, 5]
    actual = new BivariateCalculator(x, y)
  })
  it('should be defined', () => {
    expect(BivariateCalculator).toBeDefined()
  }) // Definition
  it('should throw an error if the arrays are not the same length', () => {
    function throwMe () {
      return new BivariateCalculator([1, 2], [3])
    }
    expect(throwMe).toThrow()
  }) // Array length error
  it('should heve a scale getter', () => {
    expect(actual.scale).toBeDefined()
    const spyScale = spyOnProperty(actual, 'scale')
      .and.callThrough()
    expect(actual.scale).toEqual(2)
    expect(spyScale).toHaveBeenCalled()
  })
  it('should have a push method', () => {
    expect(actual.push).toBeDefined()
    const spyPush = spyOn(actual, 'push')
      .and.callThrough()
    actual.push([3, 6])
    expect(actual.scale).toEqual(3)
    expect(spyPush).toHaveBeenCalled()
  }) // Push()
}) // First describe
