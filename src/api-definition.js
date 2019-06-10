const { warn, log, print } = require('./server-tools')

const ArrayMath = require('./array-math')
const BivariateCalculator = require('./bivariate-calculator')

class APIDefinition extends null { // Static class for the definition of restful-api functions
  static array (data) { // returns results relevant to single-dimensional array math
    try {
      log('running array-math with data', JSON.stringify(data))
      if (!data || !(data.x instanceof Array)) throw new Error('No data given')
      let model = new ArrayMath(data.x)
      return {
        sum: model.sum,
        squareSum: model.squareSum,
        mean: model.mean
      }
    } catch (err) {
      warn(err.stack)
      return false
    }
  }

  static correlation (data) {
    try {
      log('trying correlation with data', JSON.stringify(data))
      let model = new BivariateCalculator(data.x, data.y)
      return {
        sumXY: model.sumXY,
        scale: model.scale,
        r: model.r,
        rSquared: model.correlation
      }
    } catch (err) {
      warn(err.stack)
      return false
    }
  }

  static regression (data) { // returns results relevant to regression math
    try {
      log('trying regression with data', JSON.stringify(data))
      let model = new BivariateCalculator(data.x, data.y)
      return {
        beta0: model.beta0,
        beta1: model.beta1,
        nextY: model.predictNextY(data.nextX)
      }
    } catch (err) {
      warn(err.stack)
      return false
    }
  }

  static greet (data) {
    let { name } = data
    print(`Hello from ${name}!`)
    return `Hello ${name}, nice to meet you`
  }
}

module.exports = APIDefinition
