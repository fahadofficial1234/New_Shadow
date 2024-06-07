import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import {sepolia, mainnet} from 'wagmi/chains'
import {WagmiConfig } from "wagmi";
import { walletConnect } from "../Config";
const projectId = walletConnect
const chains = [mainnet,sepolia];

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
createWeb3Modal({ wagmiConfig, projectId, chains })



const WagmiWalletTestnet = ({children}) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        {children}
      </WagmiConfig>
    </>
  );
};

export default WagmiWalletTestnet;


export {  walletConnect }