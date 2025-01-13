import React, { FormEvent, useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact: React.FC = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "3747aba7-7073-4812-ae6f-cc2ae26687c8");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResult("There was an error. Please try again.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas nobis quas ullam numquam, laudantium molestiae amet itaque esse necessitatibus laboriosam, in, est rerum dolore perferendis!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" /><p>hskbkw@gmail.com</p>
            </div>   
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" /><p>+7889540485</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" /><p>PA, UNITED STATES</p>
            </div>       
          </div>        
        </div>
      </div>
      <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
        
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        
        <label htmlFor="message">Write your message here</label>
        <textarea id="message" name="message" rows={8} placeholder="Enter your message" required></textarea>
        
        <button type="submit" className="contact-submit">Submit now</button>
      </form>

      {result && <p>{result}</p>}
    </div>
  );
}

export default Contact;