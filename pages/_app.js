import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
/*the chain id 4 represents the Rinkeby testnet*/
/* the injected connecter is web3 conection used by MetaMask*/

const supportedChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
