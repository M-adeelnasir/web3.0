import React from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../images/logo.png'

const Navbar = () => {
  const NavItem = ({ title, classProps }) => {
    return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
  }

  return (
    <>
      <nav className='w-full flex md:justify-center justify-between items-center p-4'>
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
          <img src={logo} className='w-32 cursor-pointer' alt='' />
        </div>
        <ul className='text-white md:flex hidden list-none justify-between items-center flex-initial'>
          {['Market', 'Exchange', 'Docs', 'Walltes'].map((item, i) => (
            <NavItem key={item + i} title={item} />
          ))}
          <li className='bg-[#2952e3] py-2 px-7 rounded-full cursor-pointer'>
            {' '}
            Login
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
