const http = require('http')
const { restfulAPI } = require('./index')
const { initialize } = require('./src/server-tools')

const listenPort = 80
let initMessage = `### New server started on ${new Date()} ###` +
  `\n--> listening on port ${listenPort}`

initialize(initMessage)

const server = http.createServer(restfulAPI)

server.listen(listenPort)
