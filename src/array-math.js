exports.ArrayMath = class ArrayMath extends Array {
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
}
