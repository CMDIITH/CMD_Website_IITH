import React, { useState } from 'react';
import './InfraAcademic.css';


import phase1_2 from '../../assets/Images/Gallery/PHASE1_2.jpeg';
import phase1_5 from '../../assets/Images/Gallery/PHASE1_5.jpeg';
import phase1_6 from '../../assets/Images/Gallery/PHASE1_6.jpeg';
import Lib from '../../assets/Images/Infra/LIB1.jpg';
import CHY from '../../assets/Images/Infra/CHY.jpg';
import CS1 from '../../assets/Images/Infra/CS2.png';
import MA1 from '../../assets/Images/Infra/MA2.png';
import BTBM from '../../assets/Images/Infra/BTBM.jpg';
import MSME from '../../assets/Images/Infra/MSME.jpg';
import DOD from '../../assets/Images/Infra/DOD1.png';
import LHC from '../../assets/Images/Infra/LHC1.png';
import TRP from '../../assets/Images/Infra/TRP.jpg';
import TIP from '../../assets/Images/Infra/TIP.jpg';
import RCC from '../../assets/Images/Infra/RCC.jpg';
import CC from '../../assets/Images/Infra/CC1.jpg';
import ADMIN from '../../assets/Images/Infra/ADMIN.png';
import feat_ablock from '../../assets/Images/Feat_Infra/feat_ablock.png';
import feat_bblock from '../../assets/Images/Feat_Infra/feat_bblock.png';
import feat_cblock from '../../assets/Images/Feat_Infra/feat_cblock.png';
import feat_chem from '../../assets/Images/Feat_Infra/feat_chem.png';
import feat_cs from '../../assets/Images/Feat_Infra/feat_cs.png';
import feat_ma from '../../assets/Images/Feat_Infra/feat_ma.png';
import feat_btbm from '../../assets/Images/Feat_Infra/feat_btbm.png';
import feat_msme from '../../assets/Images/Feat_Infra/feat_msme.png';
import feat_design from '../../assets/Images/Feat_Infra/feat_design.png';
import feat_lib from '../../assets/Images/Feat_Infra/feat_lib.png';
import feat_lhc from '../../assets/Images/Feat_Infra/feat_lhc.png';
import feat_incu from '../../assets/Images/Feat_Infra/feat_incubator.png';
import feat_rcc from '../../assets/Images/Feat_Infra/feat_rcc.png';
import feat_cc from '../../assets/Images/Feat_Infra/feat_cc.png';
import feat_admin from '../../assets/Images/Feat_Infra/feat_admin.png';

const InfraAcademic = () => {
  const [modalData, setModalData] = useState({ isVisible: false, title: '', videoSrc: '', content: '' });

  const openModal = (title, videoSrc, content) => {
      setModalData({ isVisible: true, title, videoSrc, content });
  };

  const closeModal = () => {
      setModalData({ isVisible: false, title: '', videoSrc: '', content: '' });
  };

 return (
        <div className='InfraResidence-all'>
            <h1 className='InfraResidence-heading'>ACADEMIC BUILDINGS</h1>
            <div className='InfraResidence-buildings'>
                <div className='InfraResidence-building' onClick={() => openModal('AEROSPACE AND MECHANICAL DEPARTMENT', feat_cblock, 'Constructed in Phase 1, the Aerospace and Mechanical Department serves as a hub for engineering excellence and innovation. Spanning an area of 18,964 square feet, this department s design is based on Moment & Force, Poetry in motion, this department features state-of-the-art laboratories, advanced research facilities, and modern classrooms designed to facilitate hands-on learning and collaboration among students and faculty. The unique theme of the department revolves around integrating theoretical knowledge with practical application, encouraging students to engage in cutting-edge research and development projects. The Aerospace and Mechanical Department plays a crucial role in shaping the next generation of engineers by providing a comprehensive educational experience that prepares them for challenges in the aerospace and mechanical fields.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={phase1_6} alt="International Guest House" />
                    <h2 className='InfraResidence-building-name'>AEROSPACE AND MECHANICAL DEPARTMENT</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('CIVIL DEPARTMENT', feat_bblock, 'Constructed in Phase 1, the Civil Department serves as a cornerstone for engineering education and infrastructure development. Spanning an area of 16,394 square feet, this department s design is based on the Knuckels and Joints of human body, how they come together and make each hand intersting and beautiful, this department features well-equipped laboratories, advanced simulation tools, and modern lecture halls designed to foster an interactive learning environment. The unique theme of the department focuses on sustainability and innovation in civil engineering, encouraging students to engage in research projects that address real-world challenges. The Civil Department plays a vital role in preparing future civil engineers by providing a comprehensive educational experience that combines theoretical knowledge with practical skills, essential for shaping resilient and sustainable communities.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={phase1_2} alt="Faculty Tower" />
                    <h2 className='InfraResidence-building-name'>CIVIL DEPARTMENT</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('CHEMICAL ENGINEERING DEPARTMENT', feat_ablock, 'Constructed in Phase 1, the Chemical Engineering Department serves as a vital center for research and education in chemical processes and materials science. Spanning an area of 18,499 square feet, this department s design is based on Symbolism and Transformation, this department features cutting-edge laboratories, pilot plants, and advanced classrooms designed to enhance hands-on learning and collaboration among students and faculty. The unique theme of the department emphasizes innovation and sustainability, encouraging students to engage in interdisciplinary research that addresses pressing global challenges. The Chemical Engineering Department plays a crucial role in preparing future engineers by providing a comprehensive educational experience that integrates theoretical foundations with practical applications in various industries.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={phase1_5} alt="Student Hostels" />
                    <h2 className='InfraResidence-building-name'>CHEMICAL ENGINEERING DEPARTMENT</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('COMPUTER SCIENCE AND ELETRICAL DEPARTMENT', feat_cs, 'Constructed in Phase 2-3B, the Computer Science and Electrical Department serves as a dynamic hub for innovation and technology education. Spanning an area of 19,682 square feet, this department features state-of-the-art laboratories, advanced computing facilities, and modern classrooms designed to foster a collaborative learning environment. The unique theme of the department emphasizes the integration of computer science principles with electrical engineering concepts, encouraging students to engage in multidisciplinary projects that address real-world challenges. The Computer Science and Electrical Department plays a vital role in preparing future professionals by providing a comprehensive educational experience that blends theoretical knowledge with practical skills, essential for success in the rapidly evolving tech landscape.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={CS1} alt="Married Hostel" />
                    <h2 className='InfraResidence-building-name'>COMPUTER SCIENCE AND ELETRICAL DEPARTMENT</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('MATHS, PHYSICS AND LIBERAL ARTS', feat_ma, 'Constructed in Phase 2-3B, the Maths, Physics, and Liberal Arts Department serves as a foundational pillar for a well-rounded education in science and humanities. Spanning an area of 17,584 square feet, this department features modern classrooms, well-equipped laboratories, and collaborative spaces designed to promote critical thinking and interdisciplinary learning. The unique theme of the department emphasizes the interconnectedness of mathematical and physical sciences with liberal arts, encouraging students to explore the broader implications of their studies. The Maths, Physics, and Liberal Arts Department plays a crucial role in developing analytical and creative skills, preparing students for diverse career paths that require a strong understanding of both technical and humanistic perspectives.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={MA1} alt="Sharing Hostels" />
                    <h2 className='InfraResidence-building-name'>MATHS, PHYSICS AND LIBERAL ARTS</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('CHEMICAL DEPARTMENT', feat_chem, 'Constructed in Phase 2-3A, the Chemical Department serves as a key institution for advancing education and research in the field of chemistry. Spanning an area of 10,063 square feet, this department features state-of-the-art laboratories, dedicated research facilities, and modern classrooms designed to support hands-on learning and experimentation. The unique theme of the department emphasizes innovation and environmental sustainability, encouraging students to engage in research that addresses contemporary global challenges, such as pollution and resource management. The Chemical Department plays a vital role in shaping future chemists by providing a comprehensive educational experience that integrates theoretical knowledge with practical applications essential for various industries.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={CHY} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>CHEMICAL DEPARTMENT</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('BIO TECCHNOLOGY & BIO MEDICAL DEPARTMENT', feat_btbm, 'Constructed in Phase 2-3A, the Biotechnology & Biomedical Department serves as a cutting-edge center for research and education in the fields of biotechnology and biomedical sciences. Spanning an area of 8,552 square feet, this department features advanced laboratories, state-of-the-art research facilities, and interactive classrooms designed to enhance experiential learning and collaboration among students and faculty. The unique theme of the department emphasizes innovation and healthcare solutions, encouraging students to engage in research that addresses critical issues such as disease prevention and treatment, as well as sustainable bioprocessing. The Biotechnology & Biomedical Department plays a crucial role in preparing future professionals by providing a comprehensive educational experience that integrates theoretical foundations with practical skills necessary for success in the rapidly evolving biotech and healthcare industries.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={BTBM} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>BIO TECCHNOLOGY & BIO MEDICAL DEPARTMENT</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('MATERIALS SCIENCE & METALLURGICAL ENGINEERING', feat_msme, 'Constructed in Phase 2-3A, the Materials Science & Metallurgical Engineering Department serves as a vital center for education and research in the field of materials development and processing. Spanning an area of 5,997 square feet, this department features advanced laboratories, cutting-edge research facilities, and modern classrooms designed to promote hands-on learning and innovation. The unique theme of the department emphasizes the exploration of materials properties and their applications in various industries, encouraging students to engage in research that addresses challenges such as sustainability and performance enhancement. The Materials Science & Metallurgical Engineering Department plays a crucial role in preparing future engineers by providing a comprehensive educational experience that integrates theoretical knowledge with practical skills essential for success in the materials and metallurgical sectors.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={MSME} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>MATERIALS SCIENCE & METALLURGICAL ENGINEERING</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('DESIGN DEPARTMENT', feat_design, 'Constructed in Phase 2-3B, the Design Department serves as a creative hub for innovation and artistic expression in various design disciplines. Spanning an area of 6,490 square feet, designed as an open building concept, this department features state-of-the-art studios, advanced digital fabrication labs, and modern classrooms designed to inspire collaboration and hands-on learning. The unique theme of the department emphasizes user-centered design and sustainability, encouraging students to engage in projects that address real-world problems while prioritizing functionality and aesthetics. The Design Department plays a crucial role in shaping future designers by providing a comprehensive educational experience that integrates theoretical knowledge with practical skills essential for success in fields such as graphic design, industrial design, and interior design.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={DOD} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>DESIGN DEPARTMENT</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('LIBRARY', feat_lib, 'Constructed in Phase 2-3B, the Library serves as a vital resource center for students, faculty, and researchers, providing access to a wealth of knowledge and information. Spanning an area of 9,325 square feet, this modern facility features spacious reading rooms, advanced digital resources, and collaborative study areas designed to foster a conducive learning environment. The unique theme of the Library emphasizes accessibility and innovation, encouraging users to engage with both traditional and digital resources through interactive technologies. The Library plays a crucial role in supporting academic success and research by offering a comprehensive collection of books, journals, and online databases, as well as dedicated spaces for study, research, and community events.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={Lib} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>LIBRARY</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('LECTURE HALL COMPLEX', feat_lhc, 'Constructed in Phase 2-3B, the Lecture Hall Complex serves as a central venue for academic instruction and large-scale events. Spanning an area of 15,763 square feet, this facility features multiple lecture halls equipped with advanced audio-visual technology, tiered seating, and modern acoustics designed to enhance the learning experience. The unique theme of the complex emphasizes collaboration and engagement, encouraging interactive learning through discussions, presentations, and workshops. The Lecture Hall Complex plays a crucial role in supporting the educational mission of the institution by providing a flexible space that accommodates various teaching methods and community events, fostering an inclusive academic environment for students and faculty alike.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={LHC} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>LECTURE HALL COMPLEX</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('RESEARCH PARK', feat_incu, 'Constructed in Phase 2-3A, the Research Park serves as an innovation hub that fosters collaboration between academia and industry. Spanning an area of 19,559 square feet, this state-of-the-art facility features modern laboratories, office spaces for startups, and collaborative workspaces designed to promote interdisciplinary research and development. The unique theme of the Research Park emphasizes entrepreneurship and technological advancement, encouraging researchers and companies to engage in projects that drive innovation and economic growth. The Research Park plays a crucial role in supporting cutting-edge research and providing resources for commercialization, creating an ecosystem where ideas can flourish and translate into real-world solutions.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={TRP} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>RESEARCH PARK</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('RESEARCH CENTER COMPLEX', feat_rcc, 'Constructed in Phase 2-3A, the Research Center Complex serves as a pivotal facility dedicated to advanced research and innovation across various scientific disciplines. Spanning an area of 12,325 square feet, this complex features specialized laboratories, collaborative research spaces, and seminar rooms equipped with cutting-edge technology designed to facilitate high-impact studies. The unique theme of the Research Center Complex emphasizes interdisciplinary collaboration and knowledge transfer, encouraging researchers to work together on projects that address pressing global challenges. The Research Center Complex plays a crucial role in driving scientific discovery and innovation by providing researchers with the necessary resources, support, and environment to pursue groundbreaking research that contributes to societal progress.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={RCC} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>RESEARCH CENTER COMPLEX</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('INCUBATOR', feat_incu, 'Constructed in Phase 2-3A, the Incubator serves as a dynamic support system for emerging startups and innovative entrepreneurs. Spanning an area of 19,559 square feet, this facility features flexible workspaces, meeting rooms, and access to essential resources such as mentorship and funding opportunities designed to foster business development and growth. The unique theme of the Incubator emphasizes entrepreneurship and collaboration, encouraging startups to connect, share ideas, and receive guidance from industry experts and successful entrepreneurs. The Incubator plays a crucial role in nurturing the next generation of innovators by providing a conducive environment that enables them to transform their ideas into viable businesses, contributing to economic development and job creation.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={TIP} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>INCUBATOR</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('CONVENTION CENTER', feat_cc, 'Constructed in Phase 2-3A, the Convention Center serves as a premier venue for hosting conferences, seminars, and large-scale events. Spanning an area of 17,124 square feet, this state-of-the-art facility features versatile meeting spaces, exhibition halls, and breakout rooms equipped with advanced audio-visual technology designed to accommodate diverse event needs. The unique theme of the Convention Center emphasizes connectivity and community engagement, encouraging organizations and individuals to gather, collaborate, and share knowledge in an inspiring environment. The Convention Center plays a crucial role in facilitating professional development and networking opportunities by providing a world-class space that enhances the overall experience for attendees and organizers alike.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={CC} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>CONVENTION CENTER</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('ADMIN BLOCK', feat_admin, 'Constructed in Phase 2-3B, the Admin Block serves as the central hub for administrative operations and support services within the institution. Spanning an area of 6,840 square feet, this facility features well-designed offices, meeting rooms, and reception areas equipped with modern technology to facilitate efficient administrative processes. The unique theme of the Admin Block emphasizes transparency and accessibility, encouraging open communication and collaboration among faculty, staff, and students. The Admin Block plays a crucial role in ensuring the smooth functioning of the institution by providing essential services, including academic advising, student affairs, and human resources, thus supporting the overall mission and vision of the organization.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={ADMIN} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>ADMIN BLOCK</h2>
                </div>
            </div>

            {modalData.isVisible && (
                <div className='modal-overlay'>
                    <div className='modal-content'>
                        <span className='close-modal' onClick={closeModal}>&times;</span>
                        <h2 className='modal-content-heading'>{modalData.title}</h2>

                        <img src={modalData.videoSrc} alt="yo" className='img_inde' loading='lazy'/>
                        <p className='modal-content-para'>{modalData.content}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InfraAcademic