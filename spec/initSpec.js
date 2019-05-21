/* global describe it expect */
describe('Welcome to my first NodeJS Unit Test', () => {
  it('This test should succeed', () => {
    expect(true).toBe(true)
    expect(true).not.toBe(false)
  }) // Should succeed
})
