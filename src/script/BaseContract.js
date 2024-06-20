'use strict'

const { ethers } = require('ethers')
const config = require('./configs/config.js')
const { NETWORK } = require('./utils/constant.js')

class BaseContract {
  createProvider () {
    return ethers.getDefaultProvider(NETWORK , {
      alchemy: config.alchemyApiKey,
    });
  }

  generateContractABI() {
    throw new Error('need to be inherited')
  }

  createContract () {
    throw new Error('need to be inherited')
  }
}

module.exports = BaseContract
