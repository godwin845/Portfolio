import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About: React.FC = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi temporibus repellendus distinctio eos earum iste nobis accusamus facere natus aut, iure, provident quaerat aspernatur quia.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus delectus natus ea quo numquam aliquid laborum doloremque aut recusandae necessitatibus magnam debitis, voluptatibus eius.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>CSS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>90+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>15+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About