'use strict'

const { ethers } = require('ethers')

const config = require('../configs/config.js')

class Provider {
  static create () {
    return this.createDefaultProvider()
  }

  static createDefaultProvider () {
    return new ethers.JsonRpcProvider(this.infuraUrl)
  }

  static get infuraUrl () {
    return `${config.infuraUrl}${this.infuraApiKey}`
  }

  static get infuraApiKey () {
    return config.infuraApiKey
  }
}

module.exports = Provider
