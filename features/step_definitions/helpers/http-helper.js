const { restfulAPI } = require('../../../index')

class HTTPHelper {
  static request (url) {
    let request = { url }
    let response = new HTTPResponse()
    restfulAPI(request, response)
    return response
  }
}

class HTTPResponse {
  writeHead (status, header) {
    this.status = status
    this.header = header
    return this
  }
  end (content) {
    this.content = content
    return this
  }
}

module.exports = HTTPHelper
