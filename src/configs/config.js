const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test', 'local').required(),
    ALCHEMY_API_KEY: Joi.string(),
    LIQUIDITY_TOKEN_CONTRACT_ADDRESS: Joi.string(),
    SIMPLE_DEX_CONTRACT_ADDRESS: Joi.string(),
    DUC_TOKEN_ADDRESS: Joi.string(),
    HIEU_TOKEN_ADDRESS: Joi.string(),
    METAMASK_ADDRESS: Joi.string(),
    INFURA_API_KEY: Joi.string(),
    INFURA_URL: Joi.string(),
    METAMASK_PRIVATE_KEY: Joi.string(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  alchemyApiKey: envVars.ALCHEMY_API_KEY,
  liquidityTokenContractAddress: envVars.SIMPLE_DEX_CONTRACT_ADDRESS,
  simpleDexContractAddress: envVars.SIMPLE_DEX_CONTRACT_ADDRESS,
  ducTokenAddress: envVars.DUC_TOKEN_ADDRESS,
  hieuTokenAddress: envVars.HIEU_TOKEN_ADDRESS,
  metamaskAddress: envVars.METAMASK_ADDRESS,
  infuraApiKey: envVars.INFURA_API_KEY,
  infuraUrl: envVars.INFURA_URL,
  metamaskPrivateKey: envVars.METAMASK_PRIVATE_KEY,
};
