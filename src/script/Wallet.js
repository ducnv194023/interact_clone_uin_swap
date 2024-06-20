'use strict'

const { ethers } = require('ethers')

const config = require('../configs/config.js');
const Provider = require('./Provider.js')

class Wallet {
  static create ({
    provider = Provider.create(),
  } = {}) {
    return this.createDefaultWallet({
      provider
    }) 
  }

  static createDefaultWallet ({
    provider,
  }) {
    return new ethers.Wallet(
      config.metamaskPrivateKey,
      provider
    )
  }
}

module.exports = Wallet
