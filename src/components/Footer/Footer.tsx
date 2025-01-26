import React from 'react'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer: React.FC = () => {
  return (
    <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-44 my-12 flex flex-col gap-8 mt-12 sm:mt-24 md:mt-32'>
        <div className="flex flex-col sm:flex-row justify-between">
            <div className="max-w-[400px] mb-8 sm:mb-0">
                <img src={footer_logo} alt="Footer Logo" />
                <p className="text-lg mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolore laborum nobis veniam, debitis, dolores enim repudiandae impedit tenetur consequuntur delectus nulla facilis exercitationem mollitia?</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-9">
                <div className="flex gap-8 sm:gap-8 items-center p-5 rounded-full bg-[#32323B] pr-20 mb-6 sm:mb-0">
                    <img src={user_icon} alt="User Icon" />
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="outline-none bg-transparent text-[#a0a0a0] font-outfit text-lg w-full sm:w-auto" 
                    />
                </div>
                <div className="text-lg px-12 py-5 rounded-full bg-gradient-to-br from-[#DF8908] to-[#B415FF] cursor-pointer transform hover:scale-110 transition-all duration-300 w-full sm:w-auto">
                    Subscribe
                </div>
            </div>
        </div>
        <hr />
        <div className="flex flex-col sm:flex-row justify-between text-lg mt-8 mb-12">
            <p className="text-xl">2023 Alex. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;