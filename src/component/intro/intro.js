import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import contactImg from '../../assets/contactme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
         <div className='introContent'>
            <span className='Hello'>Hello,</span>
            <span className='introText'> I'm<span className='introName'> Gabriel</span><br />Software Developer</span>
            <p className='introPara'>I am a skilled Software Developer with experience in creating<br/> user friendly websites with 
            spring MVC and a consumable<br/> Api with spring restApi which entails a very<br/> tight security implementation.</p>

            <Link>
         <button className='btn'><img src={contactImg} alt='contactImg' className='btnImg'/>Hire me</button>
         </Link>
         </div>
         
         <img src={bg} alt='bg' className='bg'/>
    </section>
  );
}

export default Intro
