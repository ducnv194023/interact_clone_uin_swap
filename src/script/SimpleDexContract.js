'use strict'

const fs = require('fs')

const { ethers } = require('ethers')

const config = require('../configs/config.js')
const BaseContract = require('./BaseContract.js')

class SimpleDexContract extends BaseContract {
  generateContractABI() {
    const obj = JSON.parse(fs.readFileSync('src/static/SimpleDex.json', 'utf8'));

    return obj.abi
  }

  async createContract() {
    return new ethers.Contract(config.simpleDexContractAddress, this.generateContractABI(), this.wallet)
  }

  async createPair() {
    const simpleDexContract = await this.createContract()
      const tokenA = config.ducTokenAddress
      const tokenB = config.hieuTokenAddress
      const amountADesired = ethers.toBigInt(500000) 
      const amountBDesired = ethers.toBigInt(250000)
      const to = config.metamaskAddress

    const tx = await simpleDexContract.addLiquidity(
      tokenA,
      tokenB,
      amountADesired,
      amountBDesired,
      to
    )
  }
}

module.exports = SimpleDexContract
