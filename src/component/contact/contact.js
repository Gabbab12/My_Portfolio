import React, { useRef } from 'react';
import './contact.css';
import  warmart from '../../assets/Dewtom.png';
import facebook from '../../assets/Decagon.png';
import microsoft from '../../assets/new_horizons.png';
import Adobe from '../../assets/BR.png';
import facebok from '../../assets/facebook1.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser'; 


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jjfrjxa', 'template_tjmkxsd', form.current, 'tPiRyTbfZZCsxiUg6hj8G')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent !');
          }, (error) => {
            e.target.reset();
            console.error('Error sending email:', error);
                alert('Error sending email. Please try again later.');
          });
      };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>I have had the opportunity to work with a diverce group of companies.
            some of the notable companies i have worked with includes:
            </p>
            <div className='clientImgs'>
                <img src={warmart} alt='' className='clientImg' />
                <img src={facebook} alt='' className='clientImg' />
                <img src={microsoft} alt='' className='clientImg' />
                <img src={Adobe} alt='' className='clientImg' />
            </div>
        </div>
        <div id='contact'>
            <div className='contactPageTitle'>Contact Me</div>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name' />
                <input type='email' className='email' placeholder='Your Email' name='your_email' />
                <textarea className='msg' name='message' rows={5} placeholder='Your message'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a href='https://web.facebook.com/ojogabriel.babatunde'><img src={facebok} alt='' className='link'/></a>
                    <a href='https://www.instagram.com/babatundeg81/'><img src={instagram} alt='' className='link'/></a>
                    <img src={twitter} alt='' className='link'/>
                    <a href='https://www.linkedin.com/in/gabriel-ojo-33b3a58b/'><img src={linkedin} alt='' className='link'/></a>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact
