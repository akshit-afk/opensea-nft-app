import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import { useWeb3 } from '@3rdweb/hooks'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col items-center justify-center h-screen w-screen bg-[#3b3d42]`,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-[pointer] text-black`,
  details: `text=[#282b2f] text-lg text-center mt-4 font-semibold`,
}
export default function Home() {
  const { address, connectWallet } = useWeb3()
  return (
    <div className={style.wrapper}>
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button
            className={style.button}
            onClick={() => connectWallet('injected')}
          >
            Connect MetaMask
          </button>
          <div className={style.details}>
            You need to connect your
            <br /> wallet to view your balance.
          </div>
        </div>
      )}
    </div>
  )
}
