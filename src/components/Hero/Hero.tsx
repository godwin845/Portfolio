import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero: React.FC = () => {
  return (
    <div id='home' className='flex flex-col items-center gap-9 px-4'>
        <img src="https://imgs.search.brave.com/YrRRRbHRyozEWViEWBTpkyurIWjiVkW6GStNEg54Noc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC80Ni83Ni9w/ZXJzb24tZ3JheS1w/aG90by1wbGFjZWhv/bGRlci1tYW4tbWF0/ZXJpYWwtZGVzaWdu/LXZlY3Rvci0yMzgw/NDY3Ni5qcGc" alt="Hero" className="mt-10 rounded-full w-40 sm:w-48 md:w-64" />
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-semibold w-full sm:w-4/5 md:w-7/10">
            <span className="bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">I'm John Wick,</span> full-stack developer based in USA.
        </h1>
        <p className="w-full sm:w-3/4 md:w-1/2 text-center text-lg sm:text-xl leading-6 sm:leading-[40px]">
            I am a full-stack developer from California, USA with 10 years of experience.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 text-xl font-normal mb-12">
            <div className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF] cursor-pointer">
                <AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink>
            </div>
            <div className="w-full sm:w-auto mt-4 sm:mt-0 px-6 py-3 rounded-full border-2 border-white cursor-pointer hover:border-[#B415FF]">
                My Resume
            </div>
        </div>
    </div>
  )
}

export default Hero;