import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import './Home.css';
import dummy from '../../assets/Images/People/people.png';
import Cover1 from '../../assets/Videos/CMD_Video.mp4';
import grid1 from '../../assets/Images/Gallery/Gall_1.jpeg';
import grid2 from '../../assets/Images/Gallery/Gall_2.jpeg';
import grid3 from '../../assets/Images/Gallery/Gall_3.jpeg';
import grid4 from '../../assets/Images/Gallery/Gall_4.jpeg';
import grid5 from '../../assets/Images/Gallery/Gall_5.jpeg';
import grid6 from '../../assets/Images/Gallery/Gall_6.jpeg';
import grid7 from '../../assets/Images/Gallery/Gall_7.jpeg';
import Dean from '../../assets/Images/People/Prof_Suriya_S_Prakash_Dean(Planning).jpg';
import asso_dean from '../../assets/Images/People/asso_dean.jpg';
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
    gsap.to(homeRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '100%',
        scrub: 2,
      },
      backgroundColor: 'rgba(0,0,0,1)',
      duration: 3,
      ease: 'power2.inOut'
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const homeTenders = [
    {
      id: '001',
      category: 'Construction',
      title: 'Building Renovation',
      value: '$50,000',
      deadline: '2024-10-15',
      openingDate: '2024-10-20',
      documentUrl: 'document1.pdf'
    },
    {
      id: '001',
      category: 'Construction',
      title: 'Building Renovation',
      value: '$50,000',
      deadline: '2024-10-15',
      openingDate: '2024-10-20',
      documentUrl: 'document1.pdf'
    },
    {
      id: '002',
      category: 'Construction',
      title: 'Building Renovation',
      value: '$50,000',
      deadline: '2024-10-15',
      openingDate: '2024-10-20',
      documentUrl: 'document1.pdf'
    },
    {
      id: '003',
      category: 'Construction',
      title: 'Building Renovation',
      value: '$50,000',
      deadline: '2024-10-15',
      openingDate: '2024-10-20',
      documentUrl: 'document1.pdf'
    },
    {
      id: '004',
      category: 'Construction',
      title: 'Building Renovation',
      value: '$50,000',
      deadline: '2024-10-15',
      openingDate: '2024-10-20',
      documentUrl: 'document1.pdf'
    },
    {
      id: '005',
      category: 'Construction',
      title: 'Building Renovation',
      value: '$50,000',
      deadline: '2024-10-15',
      openingDate: '2024-10-20',
      documentUrl: 'document1.pdf'
    },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = homeTenders.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );


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

        <div className='main-staff-all'>
          <h1 className='main-staff-heading'>MAIN STAFF</h1>
          <div className='main-staff-content'>
            <div className='main-staff-content-item'>
              <img className='main-staff-content-item-img' src={Ravindra_MS} alt="DeanPic" />
              <h2 className='main-staff-content-item-name'>K S Ravindra Babu</h2>
              <h3 className='main-staff-content-item-position'>Superintending Engineer</h3>
            </div>
            <div className='main-staff-content-item'>
              <img className='main-staff-content-item-img' src={sateesh} alt="DeanPic" />
              <h2 className='main-staff-content-item-name'>Mahankali Sateesh</h2>
              <h3 className='main-staff-content-item-position'>Executive Engineer (Civil)</h3>
            </div>
            <div className='main-staff-content-item'>
              <img className='main-staff-content-item-img' src={Sushant_Vasta} alt="DeanPic" />
              <h2 className='main-staff-content-item-name'>Sushant Vatsa</h2>
              <h3 className='main-staff-content-item-position'>Executive Engineer (Electrical)</h3>
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

        <div className="tender-home-div">
          <div className="tender-home-head">
            <h1 className='tender-home-head-heading'>TENDERS</h1>
            <p className='tender-home-head-button' onClick={() => window.location.href = '/tenders'}>
              All Tenders &#8599;
            </p>
          </div>
          <div className="table-container">
            <input
              type="text"
              placeholder="Search by Tender Title or Tender Category"
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            <table className="searchable-table">
              <thead>
                <tr>
                  <th>Tender ID</th>
                  <th>Tender Category</th>
                  <th>Title</th>
                  <th>Value of Tender</th>
                  <th>Deadline</th>
                  <th>Date of Opening</th>
                  <th>Document (PDF)</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((tender) => (
                    <tr>
                      <td>{tender.id}</td>
                      <td>{tender.category}</td>
                      <td>{tender.title}</td>
                      <td>{tender.value}</td>
                      <td>{tender.deadline}</td>
                      <td>{tender.openingDate}</td>
                      <td><a href={tender.documentUrl} target="_blank" rel="noopener noreferrer">View Document</a></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="no-data">
                      No matching records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



