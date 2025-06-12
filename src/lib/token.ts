import { ethers } from "ethers";
import { toast } from "react-toastify";

const bankAddress = '0x45829C52543c5119e1aCC2096C62286DA1B3c458';

export const buyProduct = async (address: string, price: number) => {
  const contractAddress = '0x8650D02031aDdd9093DB938194CE9Bd80B5754DE';
  const contractABI = [
    "function transfer(address to, uint amount) public returns (bool)"
  ];
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const erc20 = new ethers.Contract(contractAddress, contractABI, signer);

  try {
    const tx = await erc20.transfer(bankAddress, ethers.parseUnits(price.toString(), 18))
    toast.info('Transação enviada, esperando confirmação...');
    const receipt = await tx.wait();
    return {
      isSuccess: true,
      txHash: receipt.hash,
      error: null
    }
  } catch(error) {
    console.error('Ocorreu um erro ao enviar a transação de transferência')
    return {
      isSuccess: false,
      txHash: null,
      error,
    }
  }

}
