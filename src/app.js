'use strict'

const fs = require('fs')
const path = require('path')

const { ethers } = require('ethers')
const config = require('./configs/config.js')
const { NETWORK } = require('./utils/constant.js')

class CreatePair {
  createProvider () {
    return ethers.getDefaultProvider(NETWORK , {
      alchemy: config.alchemyApiKey,
    });
  }

  generateLiquidityTokenContractABI() {
    const obj = JSON.parse(fs.readFileSync('LiquidityToken.json', 'utf8'))
    return obj.abi
  }

  createContract () {
    const provider = this.createProvider()
    const liquidityTokenContractABI = this.generateLiquidityTokennContractABI()
    return new ethers.Contract(config.liquidityTokenContractAdress, liquidityTokenContractABI, provider)
  }
}
