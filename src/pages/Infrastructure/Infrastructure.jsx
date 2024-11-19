import React from 'react'
import { Link } from 'react-router-dom';
import './Infrastructure.css';
import grid2 from '../../assets/Images/Grid/grid2.jpg';
import SNCC from '../../assets/Images/Infra/SNCC2.jpg';
import swale from '../../assets/Images/swale.jpg';

const Infrastructure = () => {
  return (
    <div className='infra-all'>
      <div className="infra-vision">
        <h1 className='infra-vision-heading'>OUR VISION</h1>
        <h1 className='infra-vision-subhead'>ZERO ENERGY, ZERO WATER, & ZERO WASTE</h1>
        <p className='infra-vision-content'>Our vision is to achieve a sustainable future characterized by Zero Energy, Zero Water, and Zero Waste. We are committed to integrating innovative practices that minimize our environmental footprint while maximizing efficiency. By adopting renewable energy sources, conserving water, and eliminating waste, we aim to create resilient communities. Our goal is to inspire individuals and organizations to embrace sustainability, fostering a culture of responsibility and stewardship for future generations.</p>
      </div>
      <div className='infra-unique'>
        <h1 className='infra-unique-heading'>UNIQUE INITIATIVES BY IITH</h1>
        <div className='infra-unique-card-all'>
          <div className='infra-unique-card-left'>
            <iframe 
              className='infra-unique-card-vid mobile-hide'
              src='https://www.youtube.com/embed/Nlf81-xkhME'
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>

            <div className="infra-unique-card-content">
              <h1 className='infra-unique-card-heading'>Solid Waste Management</h1>
              <p className='infra-unique-card-para'>IITH is pioneering effective solid waste management strategies that focus on reduction, recycling, and resource recovery. Our initiatives promote community engagement and awareness, transforming waste into valuable resources. Through innovative technologies, we are leading efforts to minimize landfill use and enhance sustainability. This initiative sets a benchmark for responsible waste management practices in educational institutions.</p>
            </div>
          </div>
          <div className='infra-unique-card-right'>
            <div className="infra-unique-card-content">
              <h1 className='infra-unique-card-heading'>Swales</h1>
              <p className='infra-unique-card-para'>The implementation of swales drainage systems at IITH demonstrates our commitment to sustainable water management. These natural, landscaped channels effectively manage stormwater runoff, enhancing water quality and reducing flooding risks. By integrating green infrastructure, we are promoting biodiversity and improving the ecological health of our campus. This initiative exemplifies our dedication to harmonizing built environments with nature.</p>
            </div>
            <img className='infra-unique-card-img mobile-hide' src={swale} alt="yoo" />
          </div>
          <div className='infra-unique-card-left'>
          <iframe 
              className='infra-unique-card-vid mobile-hide'
              src="https://www.youtube.com/embed/hvKZQvt6WRs" 
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
            <div className="infra-unique-cadr-content">
              <h1 className='infra-unique-card-heading'>Sewage Treatment Plants</h1>
              <p className='infra-unique-card-para'>Our sewage treatment plants are designed to recycle wastewater efficiently, ensuring minimal environmental impact. By treating and reusing sewage for non-potable applications, we significantly reduce water wastage on campus. This initiative not only conserves valuable water resources but also educates our community about sustainable practices. Through this commitment, we are setting a standard for responsible water use in academic institutions.</p>
            </div>
          </div>
          <div className='infra-unique-card-right'>
            <div className="infra-unique-card-content">
              <h1 className='infra-unique-card-heading'>India's First 3D Printed Bridge</h1>
              <p className='infra-unique-card-para'>IITH proudly showcases India's first 3D printed bridge, a testament to our commitment to innovation in construction technology. This groundbreaking project demonstrates the potential of additive manufacturing to create efficient, sustainable infrastructure. By leveraging advanced materials and techniques, we are reducing construction waste and time. This initiative highlights our role as a leader in pioneering modern engineering solutions for the future.</p>
            </div>
            <iframe 
              className='infra-unique-card-vid mobile-hide'
              src="https://www.youtube.com/embed/Zjo0enwcCUU" 
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
      <div className='infra-build-navi'>
        <h1 className='infra-build-navi-heading'>INFRASTRUCTURE</h1>
        <div className='infra-navigation'>
          <Link to='/infrastructure/residence' className='cards card1'>RESIDENCE</Link>
          <Link to='/infrastructure/academic' className='cards card2'>ACADEMIC</Link>
          <Link to='/infrastructure/others' className='cards card3'>OTHERS</Link>
        </div>
      </div>
    </div>
  )
}

export default Infrastructure;



