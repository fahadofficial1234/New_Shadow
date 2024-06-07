
import { goerli,mainnet,sepolia,polygon,arbitrum,avalanche} from 'wagmi/chains'

export const ethMainNet = {
  ...mainnet,
  explorerName: 'Etherscan',
  customExplorer: 'https://etherscan.io/address/'
}
export const goerliEx = {
  ...goerli,
  explorerName: 'Etherscan',
  customExplorer: 'https://goerli.etherscan.io/address/'
}
export const sepoliaEx = {
  ...sepolia,
  explorerName: 'Etherscan',
  customExplorer: 'https://sepolia.etherscan.io/address/'
}
export const polygonMumbaiEx = {
  ...polygon,
  explorerName: 'Polygonscan',
  customExplorer: 'https://polygonscan.com/token/'
}
export const arbitrumGoerliEx = {
  ...arbitrum,
  explorerName: 'Arbiscan',
  customExplorer: 'https://arbiscan.io/token/'
}
export const avalancheFujiEx = {
  ...avalanche,
  explorerName: 'Snowtrace',
  customExplorer: 'https://snowtrace.io/token/'
}