import React from 'react';
import './skill.css';
import java from '../../assets/Java.png';
import webdesign from '../../assets/webdesign.png';
import graphics from '../../assets/graphics.png';

const Skills = () => {
  return (
   <section id='skills'>
       <span className='skillTitle'>What I do</span>
       <span className='skillDescr'>
       I am a skilled backend engineer with expertise in Java. I leverage the power of both Jakarta EE and 
       Spring Boot frameworks to craft robust solutions. My focus lies in developing RESTful APIs and MVC 
       applications, ensuring seamless communication and efficient data flow. With a solid foundation in Java, 
       I bring reliability and scalability to every project.
       In addition to my coding prowess, I'm also a creative mind with a passion for graphic design. 
       I transform concepts into visually appealing designs that captivate and communicate. From logos 
       to branding materials, I add a touch of artistry to the digital world.
       Building dynamic and responsive websites is my forte. I craft engaging user experiences using 
       HTML, CSS, and JavaScript. My proficiency extends to React Native, allowing me to create cross-platform
       applications. Whether it's a sleek single-page application or a complex web platform, I bring ideas to 
       life on the digital canvas.
       </span>
       <div className='skillBars'>
            <div className='skillBar'>
                <img src={java} alt='java' className='skillBarImg' />
                <div className='skillBarTxt'>
                    <h2>BACKEND ENGINEER</h2>
                    <p>As a seasoned backend engineer, I specialize in Java development, leveraging the power of 
                       Jakarta EE and Spring Boot frameworks. My proficiency extends to building secure applications 
                       with Spring Security, ensuring robust protection against potential vulnerabilities. I bring a 
                       wealth of experience in connecting applications with both relational and NoSQL databases, 
                       tailoring data storage solutions to the specific needs of each project. Beyond development, 
                       I am well-versed in Docker for containerization, CI/CD pipelines for streamlined deployment, 
                       and rational database design for optimal data organization.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={webdesign} alt='webdesign' className='skillBarImg' />
                <div className='skillBarTxt'>
                    <h2>WEB DESIGN</h2>
                    <p>In the dynamic landscape of web development, I excel in crafting immersive and responsive digital 
                        experiences. Proficient in HTML, CSS, and JavaScript, I bring websites to life with an emphasis on 
                        user-centric design. Specializing in React Native, I extend my capabilities to the realm of 
                        cross-platform application development, ensuring a consistent and engaging user experience across 
                        devices.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={graphics} alt='graphics' className='skillBarImg' />
                <div className='skillBarTxt'>
                    <h2>GRAPHICS DESIGN</h2>
                    <p>In the realm of design, I am a creative force dedicated to transforming ideas into compelling 
                        visuals. From designing logos to comprehensive branding materials, I blend artistic flair 
                        with strategic thinking. My commitment to visual storytelling extends to digital platforms, 
                        where I craft engaging user interfaces for web and mobile applications. With a holistic 
                        approach to design, I ensure that every visual element communicates effectively and resonates 
                        with the intended audience.</p>
                </div>
            </div>
       </div>
   </section>
  );
}

export default Skills
