const fs = require('fs')
const mime = require('mime-types')
const { readFile } = fs.promises

/*
  debug level:
    error: 0
    warn: 1
    debug: 2
*/
const debugLevel = 3

// log files config
let path = 'logs'
let prefix = 'server'
const debugLog = `${path}/${prefix}_debug.log`
const warnLog = `${path}/${prefix}_warn.log`
const errorLog = `${path}/${prefix}_error.log`

const logOptions = {
  encoding: 'utf8',
  flag: 'a'
}

function initialize (message) {
  let logs = [debugLog, warnLog, errorLog]
  for (let log of logs) {
    fs.rename(log, log + '.old', err => {
      oops(err)
      fs.appendFileSync(log, message.toString() + '\n', logOptions, oops)
    })
  }
  print(`Logs have been initialised, logs can be found in the ${path} directory`)
}

function log (...messages) { // For recording messages to a log file
  if (debugLevel < 2) return
  let newLine = new Date().toJSON()
  for (let aMessage of messages) {
    newLine += ' :: ' + aMessage
  }
  fs.appendFile(debugLog, newLine.toString() + '\n', logOptions, oops)
}

function warn (...messages) { // For recording warning messages to a log file
  let newLine = new Date().toJSON()
  for (let aMessage of messages) {
    newLine += ' :: ' + aMessage
  }
  fs.appendFile(warnLog, newLine.toString() + '\n', logOptions, oops)
}

function nonFatalError (...messages) {
  let newLine = new Date().toJSON()
  for (let aMessage of messages) {
    newLine += ' :: ' + aMessage
    oops(aMessage)
  }
  fs.appendFile(errorLog, newLine.toString() + '\n', logOptions, oops)
}

function oops (fatalError) { // last attempt error handling
  if (fatalError) console.error(fatalError)
}

function print (...messages) {
  console.log(...messages)
}

async function loadFile (src) {
  let contentType = mime.lookup(src)
  function fileLoadHandler (content) {
    return {
      apiResponse: content,
      contentType,
      status: 200
    }
  }
  let file = await readFile(src, { flag: 'r' }).then(fileLoadHandler).catch(err => { throw err })
  return file
}

module.exports = { initialize, log, warn, nonFatalError, oops, print, loadFile }
