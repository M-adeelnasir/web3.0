import React, { useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'

import { Loader } from './'

const comonStyle =
  'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

const Welcome = () => {
  const [isLoading, setIsloading] = useState(false)

  let cardNum = '00x2u3b.....2u3232'

  const Input = ({ placeholder, handleChange, type, name, value }) => (
    <input
      placeholder={placeholder}
      type={type}
      step='0.0001'
      value={value}
      onChange={(e) => handleChange(e, name)}
      className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
    />
  )
  const handleChange = (e, name) => {}

  const handleConnect = () => {}

  const handleSubmite = () => {}

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
              className='flex flex-row justify-center bg-[#2952e3] py-2 px-5 rounded-full cursor-pointer mt-3'
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

          <div className='flex flex-col flex-1 w-full justify-center items-center md:mt-0 mt-10'>
            <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism  '>
              <div className='flex justify-between flex-col w-full h-full '>
                <div className='flex justify-between items-start'>
                  <div className='w-10 h-10  rounded-full border-2 border-white flex items-center justify-center text-white'>
                    <SiEthereum />
                  </div>
                  <div className='text-white flex items-center justify-center'>
                    <BsInfoCircle />
                  </div>
                </div>
                <div className='text-white'>{cardNum}</div>
                <div className='text-white font-semibold'>Ethereum</div>
              </div>
            </div>
            <div className='p-5 sm:w-96 w-full flex-col justify-start blue-glassmorphism'>
              <Input
                type='text'
                placeholder='Address To'
                name='addressTo'
                handleChange={() => {}}
              />
              <Input
                type='number'
                placeholder='Amount (ETH)'
                name='amount'
                handleChange={() => {}}
              />
              <Input
                type='text'
                placeholder='Keyword (GIF)'
                name='keyword'
                handleChange={() => {}}
              />
              <Input
                type='text'
                placeholder='Enter Message'
                name='message'
                handleChange={() => {}}
              />
              <div className='h-[2px] w-full bg-gray-600 my-2' />

              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type='button'
                  onClick={handleSubmite}
                  className='flex justify-center items-center text-center w-full text-white mt-2 bg-[#2952e3] p-2 rounded-full'
                >
                  Send Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
