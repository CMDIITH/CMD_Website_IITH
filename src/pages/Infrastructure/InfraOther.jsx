import React, { useState } from 'react';
import './InfraOther.css';
import SNCC from '../../assets/Images/Infra/SNCC2.jpg';
import HOSPITAL from '../../assets/Images/Infra/HOSPITAL.png';
import feat_sncc from '../../assets/Images/Feat_Infra/feat_sncc.png';
import feat_hosp from '../../assets/Images/Feat_Infra/feat_hosp.png';
import tihan from '../../assets/Images/Feat_Infra/tihan.jpg';

const InfraOther = () => {
    const [modalData, setModalData] = useState({ isVisible: false, title: '', videoSrc: '', content: '' });

    const openModal = (title, videoSrc, content) => {
        setModalData({ isVisible: true, title, videoSrc, content });
    };

    const closeModal = () => {
        setModalData({ isVisible: false, title: '', videoSrc: '', content: '' });
    };

    return (
        <div className='InfraResidence-all'>
            <h1 className='InfraResidence-heading'>OTHER BUILDINGS</h1>
            <div className='InfraResidence-buildings'>
                <div className='InfraResidence-building' onClick={() => openModal('SPORTS AND CULTURAL COMPLEX', feat_sncc, 'Constructed in Phase 2-3A, the Sports and Cultural Complex serves as a vibrant center for promoting physical fitness, sports, and cultural activities within the institution. Spanning an area of 30,891 square meter, this facility features a multi-purpose gymnasium, outdoor sports fields, and dedicated spaces for cultural events and performances, all designed to encourage participation and engagement in various activities. The unique theme of the Sports and Cultural Complex emphasizes holistic development, fostering teamwork, creativity, and a sense of community among students and staff. The Sports and Cultural Complex plays a crucial role in enhancing the overall student experience by providing a platform for athletic excellence and cultural expression, thereby enriching campus life.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={SNCC} alt="International Guest House" />
                    <h2 className='InfraResidence-building-name'>SPORTS AND CULTURAL COMPLEX</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('TIHAN', tihan, 'Constructed in Phase 2-3A, TIHAN serves as a cutting-edge research facility focused on advancing technologies related to autonomous navigation and robotics. Spanning an area of 35,000 square feet, this innovative hub features state-of-the-art laboratories, simulation environments, and collaborative workspaces designed to foster interdisciplinary research and development in autonomous systems. The unique theme of TIHAN emphasizes innovation and real-world application, encouraging researchers, students, and industry partners to collaborate on projects that push the boundaries of technology in autonomous navigation. TIHAN plays a crucial role in driving forward the field of autonomous systems by providing essential resources, mentorship, and an environment that nurtures creativity and technological advancement, ultimately contributing to the future of intelligent mobility solutions.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={tihan} alt="Married Hostel" />
                    <h2 className='InfraResidence-building-name'>TIHAN</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('HOSPITAL', feat_hosp, 'Established in Phase 1, the Campus Hospital serves as a vital healthcare facility dedicated to the well-being of students, faculty, and staff. Spanning an area of 1,600 square meter, this modern facility features a range of medical services, including emergency care, outpatient clinics, and health education programs, all designed to promote a healthy campus environment. The unique theme of the Campus Hospital emphasizes comprehensive care and preventive health, encouraging individuals to prioritize their health through regular check-ups and wellness initiatives. The Campus Hospital plays a crucial role in ensuring the physical and mental well-being of the campus community by providing accessible healthcare services and support, thus fostering a healthier and more productive educational experience.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={HOSPITAL} alt="Sharing Hostels" />
                    <h2 className='InfraResidence-building-name'>HOSPITAL</h2>
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

export default InfraOther