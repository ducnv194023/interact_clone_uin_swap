'use strict'

const fs = require('fs')
const path = require('path')

const { ethers } = require('ethers')

const Wallet = require('./Wallet.js')

class BaseContract {
  constructor ({
    wallet,
  }) {
    this.wallet = wallet
  }

  static create ({
    wallet = Wallet.create()
  } = {}) {
    return new this({ wallet }) 
  }  
  
  createFilePath({
    fileName
  }) {
    return path.join(__dirname, '../static',fileName)
  }

  generateContractABI ({
    fileName
  }) {
    const filePath = this.createFilePath({
      fileName
    })

    const obj = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    return obj.abi
  }

  createContract ({
    contractAddress,
    contractABI,
    wallet
  }) {
    return new ethers.Contract(contractAddress, contractABI, wallet)
  }
}

module.exports = BaseContract
