const { ArrayMath } = require('./array-math')

exports.Correlation = class Correlation {
  constructor (x, y) {
    if (x.length !== y.length) throw new Error('Arrays must have equal length!')
    this.x = new ArrayMath(x)
    this.y = new ArrayMath(y)
  }
  get sumXY () {
    let xy = new ArrayMath()
    for (let i = 0; i < this.x.length; i++) {
      xy.push(this.x[i] * this.y[i])
    }
    return xy.sum
  }
  get r () {
    let { x, y, sumXY } = this
    let n = x.length
    return (n * sumXY - x.sum * y.sum) /
      Math.sqrt(x.variance * y.variance)
  }
  get rSquared () {
    return this.r ** 2
  }
}
