import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import myWork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork: React.FC = () => {
  return (
    <div id='work' className='myWork flex flex-col items-center justify-center gap-16 -mt-16'>
        <div className="myWork-title relative text-center">
            <h1 className="px-8 text-4xl sm:text-5xl font-semibold">My latest work</h1>
            <img src={theme_pattern} alt="" className="absolute bottom-0 right-0 z-[-1]" />
        </div>
        <div className="myWork-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {myWork_data.map((work, index) => {
                return (
                    <img 
                        key={index} 
                        src={work.w_img} 
                        alt="" 
                        className="w-full max-w-[350px] h-[200px] transition-transform duration-300 cursor-pointer hover:scale-110 hover:border-4 hover:border-pink-500 hover:rounded-lg" 
                    />
                );
            })}
        </div>
        <div className="myWork-showmore flex items-center justify-center gap-4 rounded-full border-2 border-white py-3 sm:py-5 px-6 sm:px-8 text-xl font-medium mb-5 cursor-pointer transition-all duration-500 hover:gap-8">
            <p>Show More</p>
            <img src={arrow_icon} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
    </div>
  )
}

export default MyWork;