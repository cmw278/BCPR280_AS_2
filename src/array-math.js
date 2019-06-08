class ArrayMath extends Array {
  constructor (newArrray = []) {
    super(...newArrray)
  }
  get sum () {
    return new Array(...this).reduce((sum, i) => {
      return sum + i
    }, 0)
  }
  get squareSum () {
    return new Array(...this).reduce((sum, i) => {
      return sum + i ** 2
    }, 0)
  }
  get mean () {
    return this.sum / this.length
  }
  get variance () {
    return this.length * this.squareSum - this.sum ** 2
  }
}

module.exports = ArrayMath
