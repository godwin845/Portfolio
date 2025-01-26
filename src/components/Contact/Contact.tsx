import React, { FormEvent, useState } from 'react';
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
    <div id="contact" className="contact flex flex-col items-center justify-center gap-16 my-24 px-8 lg:px-32 w-full">
      <div className="contact-title relative text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold px-8">Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" className="absolute bottom-0 right-0 z-[-1]" />
      </div>

      <div className="contact-section flex flex-col md:flex-row gap-16 md:gap-36 justify-between w-full">
        <div className="contact-left flex flex-col gap-8 max-w-[550px] w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text">
            Let's talk
          </h1>
          <p className="text-[#D8D8D8] text-lg sm:text-xl md:text-2xl leading-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas nobis quas ullam numquam, laudantium molestiae amet itaque esse necessitatibus laboriosam, in, est rerum dolore perferendis!
          </p>

          <div className="contact-details flex flex-col gap-5 text-[#D8D8D8] text-lg sm:text-xl">
            <div className="contact-detail flex items-center gap-5">
              <img src={mail_icon} alt="Mail Icon" className="w-6 sm:w-8" />
              <p>hskbkw@gmail.com</p>
            </div>
            <div className="contact-detail flex items-center gap-5">
              <img src={call_icon} alt="Call Icon" className="w-6 sm:w-8" />
              <p>+7889540485</p>
            </div>
            <div className="contact-detail flex items-center gap-5">
              <img src={location_icon} alt="Location Icon" className="w-6 sm:w-8" />
              <p>PA, UNITED STATES</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right flex flex-col gap-8 w-full sm:max-w-[400px] md:max-w-[450px]">
          <label htmlFor="name" className="text-[#D8D8D8] text-lg sm:text-xl font-medium">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full p-4 rounded bg-[#32323c] text-[#A0A0A0] text-lg sm:text-xl"
          />

          <label htmlFor="email" className="text-[#D8D8D8] text-lg sm:text-xl font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-4 rounded bg-[#32323c] text-[#A0A0A0] text-lg sm:text-xl"
          />

          <label htmlFor="message" className="text-[#D8D8D8] text-lg sm:text-xl font-medium">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows={8}
            placeholder="Enter your message"
            required
            className="w-full p-6 rounded bg-[#32323c] text-[#A0A0A0] text-lg sm:text-xl"
          />

          <button
            type="submit"
            className="contact-submit w-max bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white rounded-full py-5 px-12 text-lg sm:text-xl hover:scale-110 transition-transform duration-300"
          >
            Submit now
          </button>
        </form>
      </div>

      {result && <p className="text-lg sm:text-xl">{result}</p>}
    </div>
  );
};

export default Contact;