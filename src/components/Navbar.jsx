import React from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {

  const [nav, setNav] = useState(false)

const handleNav = () => {
  setNav(!nav)
}

  return (
    <div className='w-full h-[90px] bg-black font-Kanit'>

      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
      <div>
        <h1 className='text-[#6900ff]'>.STAKE</h1>
    </div>
        <div className='hidden md:flex'>
            <ul className='flex items-center text-white'>
              <li>Platform</li>
              <li>Developers</li>
              <li>Community</li>
              <li>About</li>
              <button className='ml-4'>Use Defi</button>
            </ul>
          </div>

          {/* Hamburger Menu*/}
          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' /> }
          </div>
          
          {/* Mobile Menu*/}
          <div className={nav ? 'block md:hidden w-full bg-black/70 text-white absolute top-[90px] left-0 flex justify-center text-center' : 'absolute left-[-100%]'}>
          <ul className='py-7'>
              <li className='text-3xl bold'>Platform</li>
              <li className='text-3xl bold'>Developers</li>
              <li className='text-3xl bold'>Community</li>
              <li className='text-3xl bold'>About</li>
              <button className='m-8'>Use Defi</button>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar