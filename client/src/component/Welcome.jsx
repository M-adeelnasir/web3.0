import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'

import { Loader } from './'

const comonStyle =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Welcome = () => {
  const handleConnect = () => {}
  return (
    <>
      <div className='w-full flex justify-center items-start'>
        <div className='flex md:flex-row items-start justify-between md:p-20 py-12 px-4'>
          <div className='flex flex-1 justify-start flex-col md:mr-10 text-white'>
            <h1 className='text-3xl sm:text-5xl text-gradient py-1'>
              Send Crypto <br /> Across The World
            </h1>
            <p className='text-left md:w-9/12 w-11/12 text-base mt-5'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
              unde.
            </p>
            <button
              className='flex flex-row justify-center bg-[#2952e3] py-2 px-5 rounded-full cursor-pointer'
              type='button'
              onClick={handleConnect}
            >
              {' '}
              Connect Wallet
            </button>
            <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
              <div className={`rounded-tl-2xl ${comonStyle}`}>Reliabality</div>
              <div className={comonStyle}>Secure</div>
              <div className={`rounded-tr-2xl sm:rounded-t-none ${comonStyle}`}>
                Ethereum
              </div>
              <div className={`rounded-bl-2xl ${comonStyle}`}>Web 3.0</div>
              <div className={comonStyle}>Security</div>
              <div className={`rounded-br-2xl ${comonStyle}`}>Low Fees</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
