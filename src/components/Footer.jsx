import React from 'react'
import {FaCoins} from 'react-icons/fa'

const Footer = () => {
    return (
      <div className='bg-black text-white text-center py-16 font-Kanit'>
          <div className='max-w-[1240px] mx-auto px-4 pl-5 grid grid-cols-2 lg:grid-cols-5'>
              <div>
                  <h3 className='font-bold text-xl border-b-4 border-[#6900ff] inline-block mt-4'>Products</h3>
                  <ul>
                      <li>App</li>
                      <li>Analytics</li>
                      <li>Token List</li>
                      <li>Defi</li>
                  </ul>
              </div>
              <div>
                  <h3 className='font-bold text-xl border-b-4 border-[#6900ff] inline-block mt-4'>Community</h3>
                  <ul>
                      <li>App</li>
                      <li>Analytics</li>
                      <li>Token List</li>
                      <li>Defi</li>
                  </ul>
              </div>
              <div>
                  <h3 className='font-bold text-xl border-b-4 border-[#6900ff] inline-block mt-4'>Risks</h3>
                  <ul>
                      <li>App</li>
                      <li>Analytics</li>
                      <li>Token List</li>
                      <li>Defi</li>
                  </ul>
              </div>
              <div>
                  <h3 className='font-bold text-xl border-b-4 border-[#6900ff] inline-block mt-4'>Mining</h3>
                  <ul>
                      <li>App</li>
                      <li>Analytics</li>
                      <li>Token List</li>
                      <li>Defi</li>
                  </ul>
              </div>
              <div className='icon text-yellow-500/50'>
        <FaCoins size={100}/>
        </div> 
          </div>
      </div>
    )
  }

export default Footer