import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About: React.FC = () => {
  return (
    <div id='about' className='flex flex-col items-center justify-center gap-20 my-20 mx-4 sm:mx-8 md:mx-20'>
        <div className="relative">
            <h1 className="px-8 text-4xl sm:text-5xl md:text-6xl font-semibold">About me</h1>
            <img src={theme_pattern} alt="" className="absolute bottom-0 right-0 z-[-1]" />
        </div>
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
            <div className="flex-shrink-0 w-full sm:w-auto">
                <img src={profile_img} alt="Profile" className="w-full sm:w-[300px] h-auto rounded-full" />
            </div>
            <div className="flex flex-col gap-10 sm:gap-20">
                <div className="flex flex-col gap-5 text-lg sm:text-2xl font-medium">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus repellendus distinctio eos earum iste nobis accusamus facere natus aut, iure, provident quaerat aspernatur quia.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus delectus natus ea quo numquam aliquid laborum doloremque aut recusandae necessitatibus magnam debitis, voluptatibus eius.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-8 sm:gap-12">
                        <p className="min-w-[120px] sm:min-w-[150px] text-lg sm:text-2xl font-medium">HTML</p>
                        <hr className="w-[40%] sm:w-[50%] h-2 rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF]" />
                    </div>
                    <div className="flex items-center gap-8 sm:gap-12">
                        <p className="min-w-[120px] sm:min-w-[150px] text-lg sm:text-2xl font-medium">CSS</p>
                        <hr className="w-[50%] sm:w-[70%] h-2 rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF]" />
                    </div>
                    <div className="flex items-center gap-8 sm:gap-12">
                        <p className="min-w-[120px] sm:min-w-[150px] text-lg sm:text-2xl font-medium">JavaScript</p>
                        <hr className="w-[40%] sm:w-[60%] h-2 rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF]" />
                    </div>
                    <div className="flex items-center gap-8 sm:gap-12">
                        <p className="min-w-[120px] sm:min-w-[150px] text-lg sm:text-2xl font-medium">React JS</p>
                        <hr className="w-[40%] sm:w-[50%] h-2 rounded-full bg-gradient-to-r from-[#DF8908] to-[#B415FF]" />
                    </div>
                </div>
                <div className="flex w-full justify-around sm:justify-between mb-20 flex-wrap">
                    <div className="flex flex-col items-center gap-2 transition-transform duration-500 hover:scale-110 w-full sm:w-auto">
                        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">10+</h1>
                        <p className="text-lg sm:text-xl font-medium">YEARS OF EXPERIENCE</p>
                    </div>
                    <hr className="hidden sm:block" />
                    <div className="flex flex-col items-center gap-2 transition-transform duration-500 hover:scale-110 w-full sm:w-auto">
                        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">90+</h1>
                        <p className="text-lg sm:text-xl font-medium">PROJECTS COMPLETED</p>
                    </div>
                    <hr className="hidden sm:block" />
                    <div className="flex flex-col items-center gap-2 transition-transform duration-500 hover:scale-110 w-full sm:w-auto">
                        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">15+</h1>
                        <p className="text-lg sm:text-xl font-medium">HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About