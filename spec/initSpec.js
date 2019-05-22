/* global describe it expect */
describe('Welcome to my first NodeJS Unit Test', () => {
  it('This test should succeed', () => {
    expect(true).toBe(true)
    expect(true).not.toBe(false)
  }) // Should succeed
  it('This test should fail', () => {
    expect(true).toBe(false)
    expect(true).not.toBe(true)
  }) // Should fail
})
