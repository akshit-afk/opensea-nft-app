import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col items-center justify-center h-screen w-screen bg-[#3b3d42]`,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-[pointer] text-black`,
  details: `text=[#282b2f] text-lg text-center mt-4 font-semibold`,
}
export default function Home() {
  const { address, connectWallet } = useWeb3()
  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back ${userName !== 'Unnamed' ? `${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }
  useEffect(() => {
    if (!address)
      return /* here i am using IIFE(immidiately invoked functionalexpression*/
      /* basicallyy it just calls the function automatically */
      /* syntax: (function(){})();*/
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }
      const result = await client.createIfNotExists(userDoc)
      welcomeUser(result.userName)
    })()
  }, [address])
  return (
    <div className={style.wrapper}>
      <Toaster position="bottom-left" reverseOrder={false} />
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
