import React from 'react';
import './portfolios.css';
import portfolio1 from '../../assets/web1.png';
import portfolio2 from '../../assets/web2.png';
import portfolio3 from '../../assets/graphics1.jpeg';
import portfolio4 from '../../assets/graphics2.jpeg';
import portfolio5 from '../../assets/graphics3.jpeg';
import portfolio6 from '../../assets/graphics4.jpeg';
import portfolio7 from '../../assets/graphics5.jpeg';
import portfolio8 from '../../assets/graphics6.jpeg';
import portfolio9 from '../../assets/graphics7.jpeg';
import portfolio10 from '../../assets/web3.png';
import portfolio11 from '../../assets/web4.png';
import portfolio12 from '../../assets/graphics8.jpeg';

const Portfolios = () => {
  return (
    <section id='works'>
        <h2 className='workTitle'>My Portfolio</h2>
        <span className='worksDesc'>In my dual role as a backend engineer and graphics designer, effective communication 
            stands as a pillar. Whether articulating intricate technical details in code or conveying design concepts, 
            I ensure clarity in every interaction. Embracing the ethos of active learning, I consistently seek new 
            skills to infuse innovation into my projects, a commitment that resonates through both Java backend 
            development and graphic design. Attentive listening defines my approach, understanding project 
            intricacies for precise execution. Beyond technical prowess, I embody inspirational leadership, 
            fostering collaboration and continuous improvement within teams, thereby enriching the project experience.
        </span>
        <div className='workImgs'>
            <img src={portfolio1} alt='portfolio' className='workImg' />
            <img src={portfolio2} alt='portfolio' className='workImg' />
            <img src={portfolio3} alt='portfolio' className='workImg' />
            <img src={portfolio4} alt='portfolio' className='workImg' />
            <img src={portfolio5} alt='portfolio' className='workImg' />
            <img src={portfolio6} alt='portfolio' className='workImg' />
            <img src={portfolio7} alt='portfolio' className='workImg' />
            <img src={portfolio8} alt='portfolio' className='workImg' />
            <img src={portfolio9} alt='portfolio' className='workImg' />
            <img src={portfolio10} alt='portfolio' className='workImg' />
            <img src={portfolio11} alt='portfolio' className='workImg' />
            <img src={portfolio12} alt='portfolio' className='workImg' />
        </div>
        <button className='workBtn'>See more</button>
    </section>
  );
}

export default Portfolios
