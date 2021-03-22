require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remember essay gloom clinic tail gift'; 
let testAccounts = [
"0x610da5c34c3b682abdf70cd590537972e964c23eb33d71500d771dd41a1465e4",
"0x30a2bc35dc374592b08e1ce6b94b5f863b7688f9f686edc144f98e0118111984",
"0x620f0e97bc2598a391b53277a2b5eee42efb1e857f5914e435b029b0a106cdd3",
"0xe7912cb38e98b47a57524ecab722c20b6cb882488ae6780f815cf7c9c3156ebf",
"0xb63d57ca19d2d3dcb54de8702d0bcebbdeacdf974f9d8d8e186f39a8bfa5c852",
"0xc6ef366662785f41cfc9f3ee4bc98e400a3a9cedd487489a294ccb6a4010a264",
"0x37e801918948b8feb1a1fd48f866a4b4f97c9dacc7363fd29607fd8ed935dfa6",
"0x092f03199b3a9bd7f3c59f82e556811041472718335750336e65c5cdbc83c388",
"0x866447864b145d54b2db77f9b06a00c0b3c3e575e0fa6f12eb92dacb3247709a",
"0x30915a6c9300ec7337a24be51c6b91eef6d16eb5b2fcb8038d788b0fe17b2e09"
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
