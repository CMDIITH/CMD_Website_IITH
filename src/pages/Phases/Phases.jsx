import React from 'react'
import './Phases.css'

import phase1_1 from '../../assets/Images/Gallery/PHASE1_1.jpeg';
import phase1_2 from '../../assets/Images/Gallery/PHASE1_2.jpeg';
import phase1_3 from '../../assets/Images/Gallery/PHASE1_3.jpeg';
import phase1_4 from '../../assets/Images/Gallery/PHASE1_4.jpeg';
import phase1_5 from '../../assets/Images/Gallery/PHASE1_5.jpeg';
import phase1_6 from '../../assets/Images/Gallery/PHASE1_6.jpeg';
import phase1_7 from '../../assets/Images/Gallery/PHASE1_7.jpeg';
import phase2_1 from '../../assets/Images/Gallery/PHASE2_1.jpeg';
import phase2_2 from '../../assets/Images/Gallery/PHASE2_2.jpeg';
import phase2_3 from '../../assets/Images/Gallery/PHASE2_3.jpeg';
import phase2_4 from '../../assets/Images/Gallery/PHASE2_4.jpeg';
import phase2_5 from '../../assets/Images/Gallery/PHASE2_5.jpeg';
import phase2_6 from '../../assets/Images/Gallery/PHASE2_6.jpeg';
import phase2_7 from '../../assets/Images/Gallery/PHASE2_7.jpeg';
import phase3_1 from '../../assets/Images/Gallery/PHASE3_1.jpeg';
import phase3_2 from '../../assets/Images/Gallery/PHASE3_2.jpeg'; 
import phase3_3 from '../../assets/Images/Gallery/PHASE3_3.jpeg';
import phase3_4 from '../../assets/Images/Gallery/PHASE3_4.jpeg';
import phase3_5 from '../../assets/Images/Gallery/PHASE3_5.jpeg';
import phase3_6 from '../../assets/Images/Gallery/PHASE3_6.jpeg';
import phase3_7 from '../../assets/Images/Gallery/PHASE3_7.jpeg';
import master_plan from '../../assets/Images/master_plan2.jpg';
import future1 from '../../assets/Images/Gallery/masterplan.jpeg';


const Phases = () => {
  return (
    <div className='phases-all'>
      <div className='phases-masterplan'>
        <h1 className='phases-masterplan-heading'>MASTER PLAN</h1>
        <img className='phases-masterplan-map' src={master_plan} alt="master plan" loading='lazy'/>
      </div>
      <div className='phases-phase-1'>
        <h1 className='phases-phase-1-heading'>PHASE-1</h1>
        <div class="phases-phase-1-grid">
          <img src={phase1_1} className="img5" alt='P-1 1' loading='lazy'/>
          <img src={phase1_2} className="img5" alt='P-1 2' loading='lazy'/>
          <img src={phase1_3} className="img5" alt='P-1 3' loading='lazy'/>
          <img src={phase1_4} className="img4" alt='P-1 4' loading='lazy'/>
          <img src={phase1_5} className="spanrow" alt='P-1 5' loading='lazy'/>
          <img src={phase1_6} className="img5" alt='P-1 6' loading='lazy'/>
          <img src={phase1_7} className="img5" alt='P-1 7' loading='lazy'/>
        </div>
        <p className='phases-phase-1-content'>Phase 1 of the development includes key infrastructure and residential buildings that serve the essential needs of the campus. In this phase, various residential buildings such as Faculty Housing (FH1 and SH1) and hostels for UG Boys and UG Girls (UBH1+2 and UGH1+2) were established. The academic infrastructure includes multiple blocks (A, B, and C) designated for specific departments like Chemical, Civil, and Mechanical Engineering, respectively. Amenities such as the UG/PG Boys Dining (DNB3), PG Labs, and services like the Electric Substation (ESS) were also completed during this phase, ensuring that both academic and daily living needs are met.</p>
      </div>
      <div className='phases-phase-1'>
        <h1 className='phases-phase-1-heading'>PHASE-2_3A</h1>
        <div class="phases-phase-1-grid">
          <img src={phase2_2} className="img5" alt='P-1 1' loading='lazy'/>
          <img src={phase2_3} className="img5" alt='P-1 2' loading='lazy'/>
          <img src={phase2_5} className="img5" alt='P-1 3' loading='lazy'/>
          <img src={phase2_4} className="img4" alt='P-1 4' loading='lazy'/>
          <img src={phase2_1} className="spanrow" alt='P-1 5' loading='lazy'/>
          <img src={phase2_6} className="img5" alt='P-1 6' loading='lazy'/>
          <img src={phase2_7} className="img5" alt='P-1 7' loading='lazy'/>
        </div>
        <p className='phases-phase-1-content'>
          Phase-2_3A of the development introduced additional facilities and infrastructure, expanding both academic and residential capacities. It includes the establishment of residential hostels for PG and UG Boys (PBH4 and UBH3). Academic departments like Biomedical & Biotechnology (BTBM), Chemistry (CHY), and Material Science & Metallurgical Engineering (MSME) were also part of this phase, alongside the Research Complex Center (RCC). Key central facilities such as the Sports Complex (SP), Knowledge Centre (KC), Technology Incubation and Research Parks (TIP and TRP), Convention Centre (CC), and Guest House & Conference Facility (GHS) provide a comprehensive support system for both academic and extracurricular activities.</p>
      </div>
      <div className='phases-phase-1 phases-phase-3'>
        <h1 className='phases-phase-1-heading'>PHASE-2_3B</h1>
        <div class="phases-phase-1-grid">
          <img src={phase3_1} className="img5" alt='P-1 1' loading='lazy'/>
          <img src={phase3_4} className="img5" alt='P-1 2' loading='lazy'/>
          <img src={phase3_3} className="img5" alt='P-1 3' loading='lazy'/>
          <img src={phase3_2} className="img4" alt='P-1 4' loading='lazy'/>
          <img src={phase3_5} className="spanrow" alt='P-1 5' loading='lazy'/>
          <img src={phase3_6} className="img5" alt='P-1 6' loading='lazy'/>
          <img src={phase3_7} className="img5" alt='P-1 7' loading='lazy'/>
        </div>
        <p className='phases-phase-1-content'>Phase 3 of the campus development focused on enhancing both academic and residential resources while adding critical amenities and central facilities. It includes the construction of additional hostels like PG Boys Hostel (PBH2) and Married Student Housing (MSH4). Academic departments expanded to include Electrical Engineering (EE), Computer Science Engineering (CSE), Physics (PH), Mathematics (MA), and Humanities and Social Sciences (HSS). Central facilities such as the Core Laboratories (CL), Administration Building (ADM), and Lecture Complex 1 (LE1) were established to support academic growth. Amenities like the UG/PG Boys Dining (DNB2), Primary Health Center (PHC), and the Campus School (CS) ensure comprehensive services for students and staff.</p>
      </div>
      <div className='phases-phase-1 future-plans-all'>
        <h1 className='future-plans-heading'>FUTURE PLANS</h1>
        <img className='phases-masterplan-map phases-future-plan-img' src={future1} alt="future plans" loading='lazy'/>
        <p className='future-plan-content'>As we look towards the future, our unwavering commitment to achieving Zero Energy, Zero Water, and Zero Waste remains at the forefront of our strategic initiatives. We envision a campus that not only meets but exceeds sustainability benchmarks, serving as a living laboratory for innovative solutions. Our plans include expanding our sustainability programs by integrating advanced technologies that enhance energy efficiency and promote water conservation across all areas of our campus infrastructure.</p>
        <p className='future-plan-content'>In addition to this, we are dedicated to implementing future developments that focus on innovative waste management solutions, including comprehensive recycling and upcycling programs. These programs will engage our community and encourage active participation in sustainability efforts. By fostering strong partnerships with industry leaders, governmental bodies, and academic institutions, we aim to create a robust blueprint for sustainable living. This collaborative approach will serve as a model for communities nationwide, ensuring a resilient and environmentally responsible future for generations to come. Together, we aspire to lead the charge in sustainable practices, inspiring others to follow suit as we work towards a greener planet.<p />

        </p>
      </div>
    </div>
  )
}

export default Phases
