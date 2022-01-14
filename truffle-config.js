const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
  privateKeys: ['2d8b89b0abfb60ae6f5a7716a4726796fa75a674941208256e1d607530aa5dbd'],
  providerOrUrl: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
});

module.exports = {
  networks: {
    development: {
      provider: () => provider,
      network_id: "3"
    },
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
