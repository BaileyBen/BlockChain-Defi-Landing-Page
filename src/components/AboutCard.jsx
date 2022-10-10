import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si'
import {VscServerProcess} from 'react-icons/vsc'

const AboutCard = (props) => {
  return (
    <div className='flex flex-col border border-[#6900ff]/60 shadow-2xl text-left rounded-2xl px-8 py-12
    hover:border-[#6900ff] transform transition duration-500 hover:scale-110'>
                    <div className='text-[#6900ff]'>
                    {props.icon}
                    </div>
                    <h3 className='py-4 text-2xl font-bold'>{props.heading}</h3>
                    <p>
                        {props.text}
                    </p>
                </div>
  )
}

export default AboutCard