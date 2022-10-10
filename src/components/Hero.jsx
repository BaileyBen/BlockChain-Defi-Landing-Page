import React from 'react'

import heroVid from '../assets/video.mp4'

const Hero = () => {
  return (
<div className='w-full h-[90vh] top-[90px] font-Kanit'>
    <video autoPlay muted loop src={heroVid} className='object-cover h-full w-full absolute -z-10'/>

<div className='w-full h-[90%] flex flex-col justify-center items-center text-white p-7 text-center'>
        <h1>Decentralized</h1>
        <h1 className='p-2'><span className='purple'>Liquidity</span> Pools</h1>
        <p className='text-xl py-6'>Guarenteed liquidity trading for millions of users on the BlockChain using WEB3 Technology</p>
        <div clasName=''>
        <button className='m-2'>Sign Up</button>
        <button className='m-2'>FAQ</button>
        </div>
     </div>
</div>

  )
}

export default Hero