const {BlockChain, Transaction} = require("./blockchain")
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('524155a2a42e4fe5e88749c987c724171d53abe098c9e6a434cbfd76559d52eb');
const myWalletAddress = myKey.getPublic('hex')

let KushKoin = new BlockChain;

const tx1 = new Transaction(myWalletAddress, 'address2', 30);
tx1.signTransaction(myKey);
KushKoin.addTransaction(tx1);

const tx2 = new Transaction(myWalletAddress, 'address1', 20);
tx2.signTransaction(myKey);
KushKoin.addTransaction(tx2);

console.log ('\nStarting the miner...');
KushKoin.minePendingTransactions(myWalletAddress)

console.log('\nYour balance is ', KushKoin.getBalanceOfAddress('address2'))