// Connect to the Ethereum network using web3.js
const web3 = new Web3(Web3.givenProvider);

// Set the contract address and ABI
const contractAddress = '0x10032C56bee8beC48c23dE63DaAE7fA0E23fFc3a';
const contractABI = [
  // TODO: Add the contract's ABI here
];

// Create a new instance of the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Get the user's gold token balance and update the HTML element
contract.methods.balanceOf(web3.eth.defaultAccount).call().then(balance => {
  document.getElementById('balance').textContent = balance;
});
// Purchase gold tokens
document.querySelector('#purchase form').addEventListener('submit', event => {
  event.preventDefault();
  const amount = event.target.elements.amount.value;
  contract.methods.purchase(amount).send({ from: web3.eth.defaultAccount }).then(() => {
    alert(`Successfully purchased ${amount} gold tokens!`);
  });
});

// Sell gold tokens
document.querySelector('#sell form').addEventListener('submit', event => {
  event.preventDefault();
  const amount = event.target.elements.amount.value;
  contract.methods.sell(amount).send({ from: web3.eth.defaultAccount }).then(() => {
    alert(`Successfully sold ${amount} gold tokens!`);
  });
});

// Redeem gold tokens
document.querySelector('#redeem form').addEventListener('submit', event => {
  event.preventDefault();
  const amount = event.target.elements.amount.value;
  contract.methods.redeem(amount).send({ from: web3.eth.defaultAccount }).then(() => {
    alert(`Successfully redeemed ${amount} gold tokens!`);
  });
});

// Get the user's profile information and update the HTML elements
contract.methods.getName(web3.eth.defaultAccount).call().then(name => {
  document.getElementById('name').textContent = name;
});
contract.methods.getEmail(web3.eth.defaultAccount).call().then(email => {
  document.getElementById('email').textContent = email;
});

