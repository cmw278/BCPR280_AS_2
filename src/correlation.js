const { ArrayMath } = require('./array-math')

exports.Correlation = class Correlation {
  constructor (x, y) {
    if (x.length !== y.length) throw new Error('Arrays must have equal length!')
    this.x = new ArrayMath(x)
    this.y = new ArrayMath(y)
  }
  get sumXY () {
    //
  }
  get r () {
    //
  }
  get rSquared () {
    //
  }
}
