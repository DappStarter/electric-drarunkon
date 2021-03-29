require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remain mixture gesture neck fortune struggle'; 
let testAccounts = [
"0x5b75932709eab813490c2fbba4498e9bbabd3e13ffd23d5ecf51ec8eca344746",
"0xc40adda0334ba4723edf6cb63216c9aa49bc0f20897af4cfe3e7f762efbbc7f9",
"0xcd467387a647e1e609750781a6862f2f81c84177285081edeb23efd78f5b2936",
"0x2d997886692da53c910af497676933c4c54283e3f033e9bcedde627b1ecb4508",
"0x81e212183f2482da068d88c57bfc878b8ff256c53730c804077c6088a9f99389",
"0xd50f3d038a6c6a58b57e46d7cf84d23859f2d68db432d58f8d2256bc95425668",
"0xc08e1e9e4139250494d5621f4a15536ee6860242f07fa13d104be8f88a12f0dc",
"0x9f106e7eb995eccce80e010bd0b232ee3842f55e7d3ba74f11ca359bc02bf58b",
"0x2facecfe5922c4054f1370fe1b1418483b46a95751b815083d50a88749edaeff",
"0x0e3f84f3ca8de0bd6aa1c116174df10738cf0584c80227341ffe2f5e364ae3c5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
