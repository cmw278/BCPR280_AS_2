const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const http = require('./helpers/http-helper.js')

Given('I request {string}', function (request) {
  this.request = request
})

When('I give the query {string}', function (query) {
  this.request += query
  this.response = http.request(this.request)
})

Then('I should receive the content {string}', function (expectedResponse) {
  assert.strictEqual(this.response.content, expectedResponse)
  // return 'pending'
})
