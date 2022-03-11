import React from 'react'
import { BsSnow } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
  topBar: `bg-[#303339] p-2 rounded-lg w-[18.5rem] border-[#151c22] border-bottom-0`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
}

const NFTImage = ({ selectedNft }) => {
  return (
    <div>
      <div className={style.topBar}>
        <div className={style.topBarContent}>
          <BsSnow />
          <div className={style.likesCounter}>
            <AiOutlineHeart />
            2.3k
          </div>
        </div>
      </div>
      <div>
        <img src={selectedNft?.image} alt="nftimage" className={style.nftImg} />
      </div>
    </div>
  )
}

export default NFTImage
