'use client';
import { connectWallet } from '@/lib/wallet';
import { useState } from 'react';

const MetaMaskConnect = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null); // mudou de number para string

  const handleConnect = async () => {
    try {
      const connection = await connectWallet();

      if (!connection) {
        console.error('Conexão falhou ou foi cancelada pelo usuário');
        return;
      }

      setAccount(connection.account);
      setBalance(connection.balance);
    } catch (error) {
      console.error('Falha ao conectar', error);
    }
  };

  const formatAccount = (account: string) => {
    return `${account.slice(0, 6)}...${account.slice(account.length - 4)}`;
  };

  return (
    <div>
      {account ? (
        <div>
          <p className='text-[#01080E]'>Conectado: {formatAccount(account)}</p>
          <p className='text-[#01080E]'>Saldo: {balance} BTK</p>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-[#7e232c] text-white py-2 px-4 rounded"
        >
          Conecte sua carteira
        </button>
      )}
    </div>
  );
};

export default MetaMaskConnect;
