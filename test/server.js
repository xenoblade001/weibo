/**
 * @description jest server
 * @author sun
 */

const request = require('supertest')
const server = require('../src/app').callback()

module.exports = request(server)
