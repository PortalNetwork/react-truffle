const config = require('./kaizen.json');
var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'concert load couple harbor equip island argue ramp clarify fence smart topic';

module.exports = {
  contracts_build_directory: config.ethereum.build_output_path,
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/<Your Infura API Key>'),
      network_id: 3 // official id of the ropsten network
    }
  }
};
