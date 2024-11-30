import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all'; 
import { useNavigate } from 'react-router-dom';

import './Home.css';
import Cover1 from '../../assets/Videos/CMD_Hero.mp4';
import grid1 from '../../assets/Images/Gallery/Gall_1.jpeg';
import grid2 from '../../assets/Images/Gallery/Gall_2.jpeg';
import grid3 from '../../assets/Images/Gallery/Gall_3.jpeg';
import grid4 from '../../assets/Images/Gallery/Gall_4.jpeg';
import grid5 from '../../assets/Images/Gallery/Gall_5.jpeg';
import grid6 from '../../assets/Images/Gallery/Gall_6.jpeg';
import grid7 from '../../assets/Images/Gallery/Gall_7.jpeg';
import Dean from '../../assets/Images/People/Prof_Suriya_S_Prakash_Dean(Planning).jpg';
import Debraj_Asso from '../../assets/Images/People/Debraj_Asso.png';
import sateesh from '../../assets/Images/People/sateesh_MS.jpeg';
import Sushant_Vasta from '../../assets/Images/People/Sushant_Vatsa.png';
import Ravindra_MS from '../../assets/Images/People/Ravindra_MS1.jpeg';

gsap.registerPlugin(ScrollTrigger);



const Home = () => {

  const containerRef = useRef(null);
  const homeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
  
    let mediaQuery = gsap.matchMedia();

    mediaQuery.add("(min-width: 993px)", () => {

      gsap.to(homeRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "100%",
          scrub: 2,
        },
        backgroundColor: "rgba(0,0,0,1)",
        duration: 3,
        ease: "power2.inOut",
      });
    });
  
    return () => mediaQuery.revert();
  }, []);
  
  
  return (
    <div ref={homeRef}>

      <video
        src={Cover1}
        muted
        loop
        autoPlay
        className="home-bg"
        ref={containerRef}
      ></video>
      <div id='home-all' className='home-all'>
        <div className='hero'>
          <h1 className='hero-head-first'>CONSTRUCTION AND MAINTENANCE DIVISION</h1>
          <h2 className='hero-head-second'>IIT HYDERABAD</h2>
        </div>


        <div className='cmd-intro-1'>
          <h1 className='cmd-intro-heading-1'>WHAT IS CMD</h1>
          <p className='cmd-intro-content-1'>CMD (Construction and Maintenance Division) is responsible for overseeing the construction and upkeep of infrastructure projects. It ensures that buildings, roads, and other essential facilities are built to high standards of quality and safety. The division handles the planning, execution, and management of construction projects. Additionally, CMD conducts regular inspections and maintenance to ensure longevity and functionality. The division works closely with engineers, contractors, and local authorities to meet regulatory requirements. CMD plays a crucial role in maintaining infrastructure that supports the community's needs.</p>
        </div>

        <div className='dean-message-all'>
          <h1 className='dean-message-heading'>DEAN'S MESSAGE</h1>
          <div className='dean-message-details'>
            <p className='dean-message-content'>As the Dean, I am dedicated to fostering an environment where innovation, excellence, and inclusivity are paramount. Our institution prides itself on maintaining high academic standards and providing holistic support for all students. By encouraging critical thinking and leadership, we prepare our students to excel in an ever-evolving world.</p>
            <div className='dean-message-photo'>
              <img className='dean-message-photo-img' src={Dean} alt="DeanPic" />
            </div>
          </div>
        </div>


        <div className='dean-message-all-1'>
          <h1 className='dean-message-heading-1'>ASSOCIATE DEAN'S <br /> MESSAGE</h1>
          <div className='dean-message-details-1'>
            <p className='dean-message-content-1'>As the Associate Dean, I am honored to contribute to the growth and development of our academic community. We strive to create opportunities that challenge students intellectually and promote personal growth. Collaboration and engagement are at the heart of our approach, ensuring students are equipped for real-world success.</p>
            <div className='dean-message-photo-1'>
              <img className='dean-message-photo-img-1' src={Debraj_Asso} alt="DeanPic" />
            </div>
          </div>
        </div>

        <div className='past-dean-div'>
          <h1 className='past-dean-heading'>MAIN STAFF</h1>
          <div className='past-dean-members-all'>
            <div className='past-dean-member'>
              <img className='past-dean-img' src={Ravindra_MS} alt="Dean img" loading='lazy' />
              <h2 className='past-dean-member-name'>K S Ravindra Babu</h2>
              <h3 className='past-dean-position'>Superintending Engineer</h3>
            </div>
            <div className='past-dean-member'>
              <img className='past-dean-img' src={sateesh} alt="Dean img" loading='lazy' />
              <h2 className='past-dean-member-name'>Mahankali Sateesh</h2>
              <h3 className='past-dean-position'>Executive Engineer (Civil)</h3>
            </div>
            <div className='past-dean-member'>
              <img className='past-dean-img' src={Sushant_Vasta} alt="Dean img" loading='lazy' />
              <h2 className='past-dean-member-name'>Sushant Vatsa</h2>
              <h3 className='past-dean-position'>Executive Engineer (Electrical)</h3>
            </div>
          </div>
        </div>

        <div className="gallery-home-div">
          <h2 className="gallery-home-heading">GALLERY</h2>
          <div className="gallery-home-grid">
            <img src={grid1} className="img5h" />
            <img src={grid2} className="img5h" />
            <img src={grid3} className="img5h" />
            <img src={grid4} className="img4h" />
            <img src={grid5} className="spanrowh" />
            <img src={grid6} className="img5h" />
            <img src={grid7} className="img5h" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



