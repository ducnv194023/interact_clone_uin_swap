'use strict'

const { ethers } = require('ethers')

const config = require('../configs/config.js')
const BaseContract = require('./BaseContract.js')

class SimpleDexContract extends BaseContract {
  async createPair() {
    const tokenAAddress = config.ducTokenAddress
    const tokenBAddress = config.hieuTokenAddress
    const simpleDexContractAddress = config.simpleDexContractAddress
    const simpleDexContract = this.createContract({
      contractAddress: simpleDexContractAddress,
      contractABI: this.generateContractABI({ fileName: 'SimpleDex.json'}),
      wallet: this.wallet,
    })

    const ducTokenContract = this.createContract({
      contractAddress: tokenAAddress,
      contractABI: this.generateContractABI({ fileName: 'MockERC20.json'}),
      wallet: this.wallet,
    })

    const hieuTokenContract = this.createContract({
      contractAddress: tokenBAddress,
      contractABI: this.generateContractABI({ fileName: 'MockERC20.json'}),
      wallet: this.wallet,
    })

    await ducTokenContract.approve(simpleDexContractAddress,1000000)
    await hieuTokenContract.approve(simpleDexContractAddress,500000)

    const amountADesired = ethers.toBigInt(500000) 
    const amountBDesired = ethers.toBigInt(250000)
    const to = config.metamaskAddress

    const tx = await simpleDexContract.addLiquidity(
      tokenAAddress,
      tokenBAddress,
      amountADesired,
      amountBDesired,
      to
    )
  }
}

module.exports = SimpleDexContract
