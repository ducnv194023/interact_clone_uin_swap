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
    console.log(simpleDexContract)
    console.log('11')
    const createdPair = await simpleDexContract.addLiquidity(
      config.ducTokenAddress,
      config.hieuTokenAddress, 
      500000,
      250000,
      config.metamaskAddress, 
    )
    console.log(createdPair)
    
    console.log('createdPair')
  }
}
const test = SimpleDexContract.create()
test.createPair()
//module.exports = LiquidityTokenContract
