const API = require('./api-definition')
const { log, warn, nonFatalError, loadFile } = require('./server-tools')

function apiCaller (request, response) {
  restfulAPI(request, response).catch(nonFatalError)
}

async function restfulAPI (request, response) {
  // INPUT PROCESSING
  let { apiRequest, data } = resolveURL(request.url)
  log(JSON.stringify(apiRequest) + ' requested')
  let promise = await processRequest(apiRequest, data).catch(err => {
    nonFatalError(err.stack)
    return {
      apiResponse: '',
      contentType: 'text/plain',
      status: 500
    }
  })
  let { apiResponse, contentType, status } = promise
  // HTTP HEADER
  response.writeHead(status, {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*'
  })
  response.end(apiResponse)
}

function resolveURL (url) { // resolve url and return $request and $data
  log('Resolving url', url)
  let [ apiRequest, data ] = url.split('?')
  data = data ? parseData(data).data : false // parse parameters if data is defined
  apiRequest = apiRequest.slice(1) // remove leading slash
  return {
    apiRequest,
    data
  }
}

function parseData (data) {
  try {
    let params = data.split('&')
      .map(param => param.split('='))
    let parsedData = Object.create(null)
    for (let [ key, value ] of params) parsedData[key] = value.split(',')
    return {
      data: parsedData,
      error: false
    }
  } catch (err) {
    warn(err.stack)
    return {
      data: data,
      error: true
    }
  }
}

async function processRequest (apiRequest, data) {
  if (apiRequest === '') apiRequest = 'index.html'
  let response = await (async () => {
    log('Attempting API request')
    let apiResponse = API[apiRequest](data)
    if (!apiResponse) throw new Error('Invalid data provided')
    return {
      apiResponse: JSON.stringify(apiResponse),
      contentType: 'application/json',
      status: 200
    }
  })().catch(async err => {
    log('Not an API request, attempting file request', err)
    let file
    try {
      file = await loadFile(apiRequest)
      if (!file) throw new Error('File did not read')
      return file
    } catch (err) {
      warn(err)
      let pageNotFound = await loadFile('./418.html')
      pageNotFound.status = 418
      return pageNotFound
    }
  })
  return response
}

module.exports = apiCaller
