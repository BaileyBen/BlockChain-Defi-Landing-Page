import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si'
import {VscServerProcess} from 'react-icons/vsc'
import AboutCard from './AboutCard'
import blockpic from '../assets/cyber-bg.png'

const About = () => {
  return (
    <div className='bg-black text-white text-center'>
    <div className='max-w-[1240px] mx-auto px-4 py-16 pt-5'>
        <div>
            <h1 className='py-4'>A Growing<span className='text-[#6900ff]'> Protocol </span>Ecosystems</h1>
            <p className='py-4 text-xl'>
                The Defi protocol system empowers developers, liquidity providers, and
                traders to participate in decentralized financial gain
            </p>
            <div className='flex justify-center'>
            <img className='h-80 w-100' src={blockpic} />
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>

                
                
                <AboutCard icon={<SiHiveBlockchain size={40}/>}
                 heading='Reliable, tamper-proof network'
                  text='Use decentralization trusted nodes, premium data, and 
                  cryptographics proofs to connect highly accurate and available data
                  APIs to any smart contract ' />

                <AboutCard icon={<SiStrapi size={40}/>}
                 heading='Public BlockChain Networks'
                  text='Public blockchains also help to eliminate certain challenges and issues, such as security flaws 
                  and centralization. With DLT, data is distributed across a peer-to-peer network, rather than being stored in a single locatio' />

                  <AboutCard icon={<SiFsecure size={40}/>}
                 heading='Efficient Governance'
                  text=' A substantial majority of token votes may be required to bring forward a formal governance proposal in some circumstances. However, participants can unite around a shared cause they believe is vital for the protocol' />

                <AboutCard icon={<VscServerProcess size={40}/>}
                 heading='Block Chain Miners'
                  text='While miners use a certain amount of computational power to obtain consensus in a proof-of-work (PoW) blockchain, the investors who make the highest stakes will be selected to validate blockchain transactions.' />

            </div>
        </div>
    </div>
    </div>
  )
}

export default About