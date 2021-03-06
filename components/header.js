import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

import opensealogo from '/assets/opensea.png'
const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex`,
  logoContainer: `flex items-[center] cursor-[pointer]`,
  logotext: `ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: `flex items-[center] justify-end mt-[0.4rem]`,
  headerItem: `px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}

const Header = () => {
  const { address, connectWallet } = useWeb3()

  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={opensealogo} height={40} width={40}></Image>
          <div className={style.logotext}>OpenSea</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search items,collections and accounts "
        />
      </div>
      <div className={style.headerItems}>
        <Link href="/collections/0x7a059fd012Ba5208F65f699B52ECC56d2e02496E">
          <div className={style.headerItem}>Collections</div>
        </Link>
        <div className={style.headerItem}>Stats</div>
        <div className={style.headerItem}>Resources</div>
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div
          className={style.headerIcon}
          onClick={() => connectWallet('injected')}
        >
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  )
}

export default Header
