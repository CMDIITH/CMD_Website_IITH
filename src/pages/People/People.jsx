import React from 'react'
import Dean from '../../assets/Images/People/Prof_Suriya_S_Prakash_Dean(Planning).jpg';
import './People.css'
import organo from '../../assets/Images/organo_cmd.png';
import dummy from '../../assets/Images/People/people.png';
import s_pramod_kumar from '../../assets/Images/People/S Pramod Kumar.png';
import datla_praveen_kumar from '../../assets/Images/People/Datla Praveen Kumar.png';
import menda_chiranjeevi from '../../assets/Images/People/Menda Chiranjeevi.png';
import patibandla_srikanth from '../../assets/Images/People/Patibandla Srikanth.png';
import vinay_kumar_beesa from '../../assets/Images/People/Vinay Kumar Beesa.png';
import surender_banoth from '../../assets/Images/People/Surender Banoth.png';
import viyyuri_raja_babu from '../../assets/Images/People/Viyyuri Raja Babu.png';
import amaraneni_sai_teja from '../../assets/Images/People/Amaraneni Sai Teja.png';
import chityala_anand from '../../assets/Images/People/Chityala Anand.png';
import gummadi_anil_kumar from '../../assets/Images/People/Gummadi Anil Kumar.png';
import marmala_ranadeep_kumar from '../../assets/Images/People/Marmala Ranadeep Kumar.png';
import p_srinivasulu_yadav from '../../assets/Images/People/P Srinivasulu Yadav.png';
import altaf_hussain from '../../assets/Images/People/Altaf Hussain.png';
import nadiminti_nagaraju from '../../assets/Images/People/Nadiminti Nagaraju.png';
import vanam_aneesh from '../../assets/Images/People/Vanam Aneesh.png';
import sivakrishna_reddy from '../../assets/Images/People/Sivakrishna Reddy.png';
import divakar_kumar from '../../assets/Images/People/Divakar Kumar.png';
import rajana_sravanakumar from '../../assets/Images/People/Rajana Sravanakumar.png';
import tata_bapuji from '../../assets/Images/People/Tata Bapuji.png';
import himanshu_tyagi from '../../assets/Images/People/Himanshu Tyagi.png';
import ponna_satyanarayana from '../../assets/Images/People/Ponna Satyanarayana.png';
import t_srinivas from '../../assets/Images/People/T Srinivas.png';
import m_yedukondalu from '../../assets/Images/People/M Yedukondalu.png';
import n_kalyan_kumar from '../../assets/Images/People/N Kalyan Kumar.png';
import gosu_srinivas from '../../assets/Images/People/Gosu Srinivas.png';
import p_srinivas from '../../assets/Images/People/P Srinivas.png';

import KVL_PD from '../../assets/Images/People/KVL_PD.png';
import Sireesh_PD from '../../assets/Images/People/Sireesh_PDD.png';
import Phanindra_PD from '../../assets/Images/People/Phanindra_PDD.png';

const civilStaffMembers = [
  { name: "S Pramod Kumar", position: "Assistant Executive Engineer(Civil)", image: s_pramod_kumar },
  { name: "Datla Praveen Kumar", position: "Assistant Executive Engineer(Civil)", image: datla_praveen_kumar },
  { name: "Menda Chiranjeevi", position: "Assistant Executive Engineer(Civil)", image: menda_chiranjeevi },
  { name: "Patibandla Srikanth", position: "Sr. Assistant Engineer(Civil)", image: patibandla_srikanth },
  { name: "Vinay Kumar Beesa", position: "Sr. Assistant Engineer(Civil)", image: vinay_kumar_beesa },
  { name: "Surender Banoth", position: "Sr. Assistant Engineer(Civil)", image: surender_banoth },
  { name: "Viyyuri Raja Babu", position: "Asst. Engineer (Civil)", image: viyyuri_raja_babu },
  { name: "Amaraneni Sai Teja", position: "Junior Engineer (Civil)", image: amaraneni_sai_teja },
  { name: "Chityala Anand", position: "Junior Engineer (Civil)", image: chityala_anand },
  { name: "Gummadi Anil Kumar", position: "Junior Engineer (Civil)", image: gummadi_anil_kumar },
  { name: "Marmala Ranadeep Kumar", position: "Junior Engineer (Civil)", image: marmala_ranadeep_kumar },
];

const electricalStaffMembers = [
  { name: "P Srinivasulu Yadav", position: "Assistant Executive Engineer(Electrical)", image: p_srinivasulu_yadav },
  { name: "Altaf Hussain", position: "Sr. Assistant Engineer (Electrical)", image: altaf_hussain },
  { name: "Nadiminti Nagaraju", position: "Sr. Assistant Engineer (Electrical)", image: nadiminti_nagaraju },
  { name: "Vanam Aneesh", position: "Sr. Assistant Engineer (Electrical)", image: vanam_aneesh },
  { name: "Sivakrishna Reddy", position: "Assistant Engineer (Electrical)", image: sivakrishna_reddy },
  { name: "Divakar Kumar", position: "Junior Engineer (Electrical)", image: divakar_kumar },
  { name: "Rajana Sravanakumar", position: "Junior Engineer (Electrical)", image: rajana_sravanakumar },
  { name: "Tata Bapuji", position: "Junior Engineer (Electrical)", image: tata_bapuji },
  { name: "Himanshu Tyagi", position: "Junior Engineer (Electrical)", image: himanshu_tyagi },
];


const otherCivilStaffMembers = [
  { name: "Ponna Satyanarayana", position: "Section Officer", image: ponna_satyanarayana },
  { name: "T Srinivas", position: "Asst. Section Officer", image: t_srinivas },
  { name: "M Yedukondalu", position: "Executive Assistant", image: m_yedukondalu },
  { name: "N Kalyan Kumar", position: "Executive Assistant", image: n_kalyan_kumar },
  { name: "Gosu Srinivas", position: "Accountant", image: gosu_srinivas },
  { name: "P Srinivas", position: "Junior Assistant", image: p_srinivas },
];

const People = () => {
  return (
    <div className='people-all'>
      <div className='pdf-container'>
        <img src={organo} alt="yoo" className='to-remove'/>
      </div>
      <div class="people-navi-div">
        <div class="people-navi-left">
          <h2 class="people-navi-left-heading">NAVIGATE THROUGH THE PAGE</h2>
          <p class="people-navi-left-content">
            Use the sections below to explore the esteemed faculty and leaders who have played pivotal roles in shaping our institution.</p>
        </div>
        <div class="people-navi-right">
          <div class="people-navi-right-card">
            <h4 class="people-navi-right-card-heading" onClick={() => window.location.href = '#civil'} >CIVIL UNIT STAFF &#8595;</h4>
            <p class="people-navi-right-card-content">Meet the Dedicated Civil Unit Staff Team.</p>
          </div>
          <div class="people-navi-right-card">
            <h4 class="people-navi-right-card-heading" onClick={() => window.location.href = '#electrical'}>ELECTRICAL UNIT STAFF &#8595;</h4>
            <p class="people-navi-right-card-content">Meet the Dedicated Electrical Unit Staff Team.</p>
          </div>
          <div class="people-navi-right-card">
            <h4 class="people-navi-right-card-heading" onClick={() => window.location.href = '#past'}>PAST DEANS &#8595;</h4>
            <p class="people-navi-right-card-content">Meet our Esteemed Past Deans.</p>
          </div>
        </div>
      </div>

      <div className='past-dean-div'>
        <h1 className='past-dean-heading'>PAST DEANS</h1>
        <div className='past-dean-members-all'>
          <div className='past-dean-member'>
            <img className='past-dean-img' src={KVL_PD} alt="Dean img" loading='lazy'/>
            <h2 className='past-dean-member-name'>KVL Subramanian</h2>
            <h3 className='past-dean-position'>11.11.2017 - 09.11.2017</h3>
          </div>
          <div className='past-dean-member'>
            <img className='past-dean-img' src={Sireesh_PD} alt="Dean img" loading='lazy'/>
            <h2 className='past-dean-member-name'>Sireesh Saride</h2>
            <h3 className='past-dean-position'>16.3.2015 - 17.01.2018</h3>
          </div>
          <div className='past-dean-member'>
            <img className='past-dean-img' src={Phanindra_PD} alt="Dean img" loading='lazy'/>
            <h2 className='past-dean-member-name'>KBVN Phanindra</h2>
            <h3 className='past-dean-position'>18.01.2018 - 17.01.2023</h3>
          </div>
        </div>
      </div>

      <div id='civil' className='civil-division'>
        <h1 className='civil-division-heading'>STAFF AT CIVIL UNIT</h1>
        <div className='civil-division-people-all'>
          {civilStaffMembers.map((staff, index) => (
            <div className='civil-division-people' key={index}>
              <img className='civil-division-people-img' src={staff.image} alt="staff img" loading='lazy'/>
              <h2 className='civil-division-people-name'>{staff.name}</h2>
              <h3 className='civil-division-people-position'>{staff.position}</h3>
            </div>
          ))}
        </div>
      </div>


      <div id='electrical' className='civil-division'>
        <h1 className='civil-division-heading'>STAFF AT ELECTRICAL UNIT</h1>
        <div className='civil-division-people-all'>
          {electricalStaffMembers.map((staff, index) => (
            <div className='civil-division-people' key={index}>
              <img className='civil-division-people-img' src={staff.image} alt="staff img" loading='lazy'/>
              <h2 className='civil-division-people-name'>{staff.name}</h2>
              <h3 className='civil-division-people-position'>{staff.position}</h3>
            </div>
          ))}
        </div>   
      </div>


      <div id='civil' className='civil-division'>
        <h1 className='civil-division-heading'>ADMINISTRATION STAFF</h1>
        <div className='civil-division-people-all'>
          {otherCivilStaffMembers.map((staff, index) => (
            <div className='civil-division-people' key={index}>
              <img className='civil-division-people-img' src={staff.image} alt="staff img" loading='lazy'/>
              <h2 className='civil-division-people-name'>{staff.name}</h2>
              <h3 className='civil-division-people-position'>{staff.position}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default People