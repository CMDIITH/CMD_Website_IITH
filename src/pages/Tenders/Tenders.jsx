import React, { useState } from 'react';
import './Tenders.css';

const civilTenders = [
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

const electricalTenders = [
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



const Tenders = () => {

  const [civilSearchTerm, setCivilSearchTerm] = useState('');
  const [electricalSearchTerm, setElectricalSearchTerm] = useState('');

  const handleCivilSearch = (event) => {
    setCivilSearchTerm(event.target.value);
  };

  const handleElectricalSearch = (event) => {
    setElectricalSearchTerm(event.target.value);
  };

  const filteredCivilData = civilTenders.filter((item) =>
    item.title.toLowerCase().includes(civilSearchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(civilSearchTerm.toLowerCase())
  );

  const filteredElectricaltData = electricalTenders.filter((item) =>
    item.title.toLowerCase().includes(electricalSearchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(electricalSearchTerm.toLowerCase())
  );

  return (
    <div className='tender-all'>
      <div class="tender-navi-div">
        <div class="tender-navi-left">
          <h2 class="tender-navi-left-heading">NAVIGATE THROUGH THE PAGE</h2>
          <p class="tender-navi-left-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet orci vehicula, s sapien nec augue vulputate auctor et eu metus</p>
        </div>
        <div class="tender-navi-right">
          <div class="tender-navi-right-card">
            <h4 class="tender-navi-right-card-heading" onClick={() => window.location.href = '#civilTen'} >CIVIL TENDERS &#8595;</h4>
            <p class="tender-navi-right-card-content">The Decennial reunion brings together alumni from IITB 10 years back.</p>
          </div>
          <div class="tender-navi-right-card">
            <h4 class="tender-navi-right-card-heading" onClick={() => window.location.href = '#electricalTen'}>ELECTRICAL TENDERS &#8595;</h4>
            <p class="tender-navi-right-card-content">The Decennial reunion brings together alumni from IITB 10 years back.</p>
          </div>
        </div>
      </div>
      <div id='civilTen' className="tender-electrical-div">
        <h1 className='tender-electrical-heading'>CIVIL TENDERS</h1>
        <div className="tender-electrical-table-container">
          <input
            type="text"
            placeholder="Search by Tender Title or Tender Category"
            value={civilSearchTerm}
            onChange={handleCivilSearch}
            className="search-input"
          />
          <table className="tender-electrical-searchable-table">
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
              {filteredCivilData.length > 0 ? (
                filteredCivilData.map((tender) => (
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
      <div id='electricalTen' className="tender-electrical-div tender-ele-div">
        <h1 className='tender-electrical-heading'>ELECTRICAL TENDERS</h1>
        <div className="tender-electrical-table-container">
          <input
            type="text"
            placeholder="Search by Tender Title or Tender Category"
            value={electricalSearchTerm}
            onChange={handleElectricalSearch}
            className="search-input"
          />
          <table className="tender-electrical-searchable-table">
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
              {filteredElectricaltData.length > 0 ? (
                filteredElectricaltData.map((tender) => (
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
  )
}

export default Tenders