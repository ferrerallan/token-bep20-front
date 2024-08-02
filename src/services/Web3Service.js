import Web3 from 'web3';
import ABI from '../ABI.json';  // Ajuste o caminho conforme necessário

const CONTRACT_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

// Cria uma nova instância do Web3 usando o provedor do MetaMask
export const web3 = new Web3(window.ethereum);

// Função para obter a instância do contrato usando Web3.js e ABI
export function getContract() {
  if (!window.ethereum) throw new Error('No MetaMask installed!');
  const from = localStorage.getItem('wallet');
  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });
}

// Função para logar com o MetaMask
export async function doLogin() {
  if (!window.ethereum) throw new Error('No MetaMask installed!');
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  if (!accounts || !accounts.length) throw new Error('No accounts found!');
  localStorage.setItem('wallet', accounts[0].toLowerCase());
  return accounts[0];
}

// Métodos personalizados

export async function checkBalance(address) {
  const contract = getContract();
  const balance = await contract.methods.balanceOf(address).call();
  return web3.utils.fromWei(balance, 'ether');
}

export async function rewardUser(user) {
  try {
    const contract = getContract();
    const accounts = await web3.eth.getAccounts();
    return await contract.methods.rewardUser(user).send({ from: accounts[0] });
  } catch (error) {
    console.error('Error in rewardUser function:', error);
    throw error;
  }
}

export async function rewardReview(user) {
  try {
    const contract = getContract();
    const accounts = await web3.eth.getAccounts();
    return await contract.methods.rewardReview(user).send({ from: accounts[0] });
  } catch (error) {
    console.error('Error in rewardReview function:', error);
    throw error;
  }
}

export async function rewardReferral(user, numberOfReferrals) {
  try {
    const contract = getContract();
    const accounts = await web3.eth.getAccounts();
    return await contract.methods.rewardReferral(user, numberOfReferrals).send({ from: accounts[0] });
  } catch (error) {
    console.error('Error in rewardReferral function:', error);
    throw error;
  }
}

export async function voteForMovie(movieId) {
  try {
    const contract = getContract();
    const accounts = await web3.eth.getAccounts();
    return await contract.methods.voteForMovie(movieId).send({ from: accounts[0] });
  } catch (error) {
    console.error('Error in voteForMovie function:', error);
    throw error;
  }
}

export async function setRewardAmount(amount) {
  try {
    const contract = getContract();
    const accounts = await web3.eth.getAccounts();
    return await contract.methods.setRewardAmount(amount).send({ from: accounts[0] });
  } catch (error) {
    console.error('Error in setRewardAmount function:', error);
    throw error;
  }
}

export async function getAllVotes() {
  try {
    const contract = getContract();
    const votes = await contract.methods.getAllVotes().call();
    return votes;
  } catch (error) {
    console.error('Error fetching votes:', error);
    throw error;
  }
}
