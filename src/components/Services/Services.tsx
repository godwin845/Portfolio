import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services: React.FC = () => {
  return (
    <div id='services' className='flex flex-col items-center justify-center gap-20 my-20 mx-8 sm:mx-20 lg:mx-40'>
        <div className="relative">
            <h1 className="text-4xl sm:text-5xl font-semibold px-8">My Services</h1>
            <img src={theme_pattern} alt="" className="absolute bottom-0 right-0 z-[-1]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
            {Services_Data.map((service, index) => (
                <div key={index} className="flex flex-col justify-center gap-5 p-8 sm:p-12 md:p-16 border-2 border-white rounded-lg transition duration-400 cursor-pointer hover:border-pink-500 hover:bg-gradient-to-br from-[#3f0028] to-[#582300] hover:scale-105">
                    <h3 className="text-2xl sm:text-3xl font-semibold">{service.s_no}</h3>
                    <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">{service.s_name}</h1>
                    <p className="text-gray-400 text-xl leading-8 sm:leading-10 max-w-[300px] sm:max-w-full">{service.s_desc}</p>
                    <div className="flex gap-5 items-center mt-5">
                        <p className="text-xl">Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services;