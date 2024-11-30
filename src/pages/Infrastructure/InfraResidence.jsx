import React, { useState } from 'react';
import './InfraResidence.css';
import IGH from '../../assets/Images/Infra/IGH3.jpg';
import HOSTEL from '../../assets/Images/Infra/hostel2.jpeg';
import MESS from '../../assets/Images/Infra/MESS1.png';
import feat_guest from '../../assets/Images/Feat_Infra/feat_guest.png';
import feat_hostel from '../../assets/Images/Feat_Infra/feat_hostel.png';
import feat_fac from '../../assets/Images/Feat_Infra/feat_fac.png';
import feat_married from '../../assets/Images/Feat_Infra/feat_married.png';
import married_hostel from '../../assets/Images/Feat_Infra/married_hostel.png';
import fac_tow from '../../assets/Images/Infra/faccc_toww.jpeg';

const InfraResidence = () => {
    const [modalData, setModalData] = useState({ isVisible: false, title: '', videoSrc: '', content: '' });

    const openModal = (title, videoSrc, content) => {
        setModalData({ isVisible: true, title, videoSrc, content });
    };

    const closeModal = () => {  
        setModalData({ isVisible: false, title: '', videoSrc: '', content: '' });
    };

    return (
        <div className='InfraResidence-all'>
            <h1 className='InfraResidence-heading'>RESIDENCE BUILDINGS</h1>
            <div className='InfraResidence-buildings'>
                <div className='InfraResidence-building' onClick={() => openModal('INTERNATIONAL GUEST HOUSE', feat_guest, 'Constructed in Phase 2, the International Guest House serves as a welcoming accommodation facility for visiting scholars, researchers, and international guests. Spanning an area of 30,123 square meter, this building features a contemporary design that reflects cultural diversity and inclusivity. With comfortable rooms, communal spaces for networking, and amenities for both leisure and work, it fosters a sense of community among visitors. The International Guest House plays a vital role in enhancing the institution global engagement by providing a supportive environment for collaboration and exchange, ensuring that guests feel at home during their stay.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={IGH} alt="International Guest House" />
                    <h2 className='InfraResidence-building-name'>INTERNATIONAL GUEST HOUSE</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('FACULTY TOWER', feat_fac, 'Constructed in Phase 1, the Faculty Residence Tower is inspired by image of leaves, twigs and branches to provide comfortable and convenient housing for faculty members and their families. Spanning an area of 17,090 square feet each, this building features a modern and elegant architectural style that emphasizes community living. Each residence includes spacious apartments equipped with modern amenities, communal areas for social gatherings, and recreational facilities to foster a sense of belonging among residents. The unique theme of the tower is centered around sustainability, incorporating green building practices and energy-efficient systems. The Faculty Residence Tower plays a crucial role in attracting and retaining top talent by offering a supportive living environment that enhances work-life balance for faculty members.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={fac_tow} alt="Faculty Tower" />
                    <h2 className='InfraResidence-building-name'>FACULTY TOWER</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('STUDENT HOSTELS', feat_hostel, 'Constructed in Phase 1, the Student Hostel inspired by image of leaves, twigs and branches to serves as a vibrant living community for students from diverse backgrounds. Spanning an area of 57,160 square meter (Phase 1) and 71,680 square meter (Phase 2), this building features a contemporary design that emphasizes comfort and accessibility. The hostel offers a variety of room configurations, common areas for studying and socializing, and amenities such as laundry facilities and recreational spaces, creating an environment conducive to both academic success and personal growth. The unique theme of the hostel revolves around inclusivity and collaboration, fostering a sense of community among residents. The Student Hostel plays an essential role in enhancing the overall student experience by providing a supportive and engaging living environment that promotes lifelong friendships and cultural exchange.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={HOSTEL} alt="Student Hostels" />
                    <h2 className='InfraResidence-building-name'>STUDENT HOSTELS</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('MARRIED HOSTEL', feat_married, 'Constructed in Phase 2-3A, the Married Student Hostel is inspired by the shape and organization of the four-leaf clover to provide a supportive and comfortable living environment for married students and their families. Spanning an area of 6,850 square meter, this building features a modern and family-friendly architectural style that prioritizes privacy and community. Each apartment is thoughtfully designed with essential amenities, including kitchen facilities, spacious living areas, and recreational spaces for children, fostering a homely atmosphere. The unique theme of the hostel focuses on inclusivity and support, promoting a sense of community among families while accommodating their specific needs. The Married Student Hostel plays a vital role in enhancing the academic journey of married students by offering a nurturing environment that balances family life and educational pursuits.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={married_hostel} alt="Married Hostel" />
                    <h2 className='InfraResidence-building-name'>MARRIED HOSTEL</h2>
                </div>
                <div className='InfraResidence-building' onClick={() => openModal('MESS', MESS, 'Constructed in Phase 1, the Mess serves as the central dining facility for students, providing nutritious meals in a communal setting. Spanning an area of 4,637 square meter each, this building features a modern and inviting architectural design that fosters a warm and inclusive atmosphere. The dining area is equipped with ample seating, a diverse menu catering to various dietary preferences, and open kitchens that allow students to witness the meal preparation process. The unique theme of the Mess emphasizes community and togetherness, encouraging students to share meals and engage in conversations, thereby building friendships. The Mess plays a vital role in enhancing the overall student experience by offering a space where nourishment and social interaction go hand in hand.')}>
                    <img loading='lazy' className='InfraResidence-building-img' src={MESS} alt="Mess" />
                    <h2 className='InfraResidence-building-name'>MESS</h2>
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

export default InfraResidence;

