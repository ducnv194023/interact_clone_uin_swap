'use strict'

const Wallet = require('./Wallet.js')

class BaseContract {
  constructor({
    wallet,
  }) {
    this.wallet = wallet
  }

  static create({
    wallet = Wallet.create()
  } = {}) {
    return new this({ wallet }) 
  }  
  
  
  generateContractABI() {
    throw new Error('need to be inherited')
  }

  createContract() {
    throw new Error('need to be inherited')
  }
}

module.exports = BaseContract
