import './Footer.css';
import { Link } from 'react-router-dom';
import logoO from '../../assets/IITHLOGO.png';

function Footer() {
  return (
    <div id='contact' className='footer-container'>
      <section className='footer-content'>
        <div className='footer-content-logo'>
          <img className='footer-content-logo-img' src={logoO} alt="logo" />
          <p className='footer-content-subhead'>Construction & Maintenance Division IITH</p>
        </div>
        <div className='footer-content-links'>
          <div className='footer-link-items'>
            <h2>Pages</h2>
            <Link to='/'>Home</Link>
            <Link to='/people'>People</Link>
            <Link to='/infrastructure'>Infrastructure</Link>
            <Link to='/phases'>Phases</Link>
            <Link to='https://www.iith.ac.in/tenders/#Civil%20Works'>Tenders</Link>
            <Link to='https://forms.gle/'>Complaints</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='https://www.iith.ac.in/'>IITH</Link>
            <Link to='https://erp.iith.ac.in/'>ERP</Link>
            <Link to='https://hostel.iith.ac.in/'>Hostel Coordinating Unit</Link>
            <Link to='https://gymkhana.iith.ac.in/'>Gymkhana</Link>
            <Link to='https://www.iith.ac.in/emergency_contacts/'>Emergency Contact</Link>
            <Link to='https://security.iith.ac.in/'>Security</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Office No. - CMD office IITH</Link>
            <Link to='/'>Email - office.cmd@iith.ac.in</Link>
            <Link to='/'>Phone No. - 040-23016795</Link>
          </div>
        </div>
      </section>
      <section className='social-media'>
        <p className='copyright'>
          © 2024 Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana, India. All rights reserved.
        </p>

        <div className='dev-all'>
          <a href="https://ankushs.me" target="_blank" rel="noopener noreferrer">
            <p className='developed'>Ankush Singh</p>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Footer;


