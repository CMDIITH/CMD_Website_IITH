import React from 'react';
import grid1 from '../../assets/Images/Grid/grid1.jpg';
import grid2 from '../../assets/Images/Grid/grid2.jpg';
import grid5 from '../../assets/Images/Grid/grid5.jpeg';
import grid6 from '../../assets/Images/Grid/grid6.jpg';
import grid7 from '../../assets/Images/Grid/grid7.jpg';
import ver_1 from '../../assets/Images/Gallery/GGall_Ver_1.jpeg';
import ver_2 from '../../assets/Images/Gallery/GGall_Ver_2.jpeg';
import ver_3 from '../../assets/Images/Gallery/GGall_Ver_3.jpeg';
import ver_4 from '../../assets/Images/Gallery/GGall_Ver_4.jpeg';
import ver_5 from '../../assets/Images/Gallery/GGall_Ver_5.jpeg';
import Gal_1 from '../../assets/Images/Gallery/GGall_1.jpeg';
import Gal_2 from '../../assets/Images/Gallery/GGall_2.jpeg';
import Gal_3 from '../../assets/Images/Gallery/GGall_3.jpeg';
import Gal_4 from '../../assets/Images/Gallery/GGall_4.jpeg';
import Gal_5 from '../../assets/Images/Gallery/GGall_5.jpeg';
import Gal_6 from '../../assets/Images/Gallery/GGall_6.jpeg';
import Gal_7 from '../../assets/Images/Gallery/GGall_7.jpeg';
import Gal_8 from '../../assets/Images/Gallery/GGall_8.jpeg';
import Gal_9 from '../../assets/Images/Gallery/GGall_9.jpeg';
import Gal_10 from '../../assets/Images/Gallery/GGall_10.jpeg';
import Gal_11 from '../../assets/Images/Gallery/GGall_11.jpeg';
import Gal_12 from '../../assets/Images/Gallery/GGall_12.jpeg';
import Gal_13 from '../../assets/Images/Gallery/GGall_13.jpeg';
import Gal_14 from '../../assets/Images/Gallery/GGall_14.jpeg';
import Gal_15 from '../../assets/Images/Gallery/GGall_15.jpeg';
import Gal_16 from '../../assets/Images/Gallery/GGall_16.jpeg';


import './Gallery.css';
const Gallery = () => {
  return (
    <div className='gallery-all'>
      <h2 class="gallery-heading">GALLERY</h2>
      <div class="gallery-grid-all">
        <div className='gallery-grid-right'>
          <img src={Gal_1} className="img1" />
          <img src={Gal_2} className="img1" />
          {/* <img src={grid5} className="img3" /> */}
          <img src={ver_1} className="img3" />
          <img src={Gal_3} className="img1" />
          <img src={Gal_4} className="img1" />
        </div>
    
        <div className='gallery-grid-left'>
          <img src={Gal_5} className="img8" />
          <img src={Gal_6} className="img8" />
          {/* <img src={grid5} className="img9" /> */}
          <img src={ver_2} className="img9" />
          <img src={Gal_7} className="img8" />
          <img src={Gal_8} className="img8" />
        </div>
        <div className='gallery-grid-right'>
          <img src={Gal_9} className="img1" />
          <img src={Gal_10} className="img1" />
          {/* <img src={grid5} className="img3" /> */}
          <img src={ver_3} className="img3" />
          <img src={Gal_11} className="img1" />
          <img src={Gal_12} className="img1" />
        </div>
        <div className='gallery-grid-left'>
          <img src={Gal_13} className="img8" />
          <img src={Gal_14} className="img8" />
          {/* <img src={grid5} className="img9" /> */}
          <img src={ver_4} className="img9" />
          <img src={Gal_15} className="img8" />
          <img src={Gal_16} className="img8" />
        </div>
      </div>
    </div>
  )
}

export default Gallery