const path = require('path');
const config = require('./kaizen.json');
var HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  contracts_build_directory: path.resolve(config.ethereum.build_output_path),
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },
    deployment: {
      provider: new HDWalletProvider(config.ethereum.mnemonic, config.ethereum.provider),
      network_id: config.ethereum.network_id
    }
  }
};
