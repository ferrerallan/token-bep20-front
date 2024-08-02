import contract from './contract';
import web3 from './web3';

async function enableMetaMask() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

export async function checkBalance(address) {
  const balance = await contract.methods.balanceOf(address).call();
  return web3.utils.fromWei(balance, 'ether');
}

export async function rewardUser(user) {
  await enableMetaMask();
  const accounts = await web3.eth.getAccounts();
  
  return contract.methods.rewardUser(user).send({ from: accounts[0] });
}

export async function rewardReview(user) {
  await enableMetaMask();
  const accounts = await web3.eth.getAccounts();
  return contract.methods.rewardReview(user).send({ from: accounts[0] });
}

export async function rewardReferral(user, numberOfReferrals) {
  await enableMetaMask();
  const accounts = await web3.eth.getAccounts();
  return contract.methods.rewardReferral(user, numberOfReferrals).send({ from: accounts[0] });
}

export async function voteForMovie(movieId) {
  await enableMetaMask();
  const accounts = await web3.eth.getAccounts();
  return contract.methods.voteForMovie(movieId).send({ from: accounts[0] });
}

export async function setRewardAmount(amount) {
  await enableMetaMask();
  const accounts = await web3.eth.getAccounts();
  return contract.methods.setRewardAmount(amount).send({ from: accounts[0] });
}

export async function getAllVotes() {
  const votes = await contract.methods.getAllVotes().call();
  return votes;
}