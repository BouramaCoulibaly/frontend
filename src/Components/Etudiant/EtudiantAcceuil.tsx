import React, {useState} from 'react';
import { Link } from 'react-router-dom';
///import { FaBook, FaCode, FaClipboardCheck } from 'react-icons/fa';
//import { FaFileAlt } from 'react-icons/fa';
//import { FaProjectDiagram } from 'react-icons/fa';
import { FaBook, FaCode, FaClipboardCheck, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import "./EtudiantAcceuil.css";

const EtudiantAcceuil: React.FC = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const buttonStyle = {
    marginTop: 'auto',
    backgroundColor: isButtonHovered ? '#75C0E0' : '#B676B1',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
  };

  return (
    <div>
      <header style={{ backgroundColor: '#f8f8f8', padding: '10px' }}>
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="./src/Images/i.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
              <li style={{ display: 'inline-block', margin: '0 10px' }}>
                <Link to="/praticalworks" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center' }}>
                  <FaBook style={{ marginRight: '5px' }} /> TPS
                </Link>
              </li>
              <li style={{ display: 'inline-block', margin: '0 10px' }}>
                <Link to="/projects" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center' }}>
                  <FaCode style={{ marginRight: '5px' }} /> Projects
                </Link>
              </li>
              <li style={{ display: 'inline-block', margin: '0 10px' }}>
                <Link to="/Examens" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center' }}>
                  <FaClipboardCheck style={{ marginRight: '5px' }} /> Exams
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <h2 className="animated-text">LES DEVOIRS N'ONT PLUS DE SECRET</h2>
        <p>JUST DO IT</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ width: '30%', backgroundColor: '#82CAAF', padding: '10px', textAlign: 'center', marginRight: '20px' }}>
          <FaBook style={{ fontSize: '48px', color: '#B676B1' }} />
          <h3>School Practical Works</h3>
          <p>Gère tes TPS</p>
          <Link to="/tps">
            <button
              style={buttonStyle}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              TPS
            </button>
          </Link>
        </div>


        <div style={{ width: '30%', backgroundColor: '#82CAAF', padding: '10px', textAlign: 'center', marginRight: '20px' }}>
          <FaCode style={{ fontSize: '48px', color: '#B676B1' }} />
          <h3>Projects</h3>
          <p>Gère tes projets</p>
          <Link to="/projects">
            <button
              style={buttonStyle}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              Projects
            </button>
          </Link>
        </div>


        <div style={{ width: '30%', backgroundColor: '#82CAAF', padding: '10px', textAlign: 'center' }}>
          <FaClipboardCheck style={{ fontSize: '48px', color: '#B676B1' }} />
          <h3>Exams</h3>
          <p>Gère tes examens</p>
          <Link to="/exams">
            <button
              style={buttonStyle}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              Exams
            </button>
          </Link>
        </div>


      </div>
      <div style={{ backgroundColor: '#75C0E0', padding: '10px', textAlign: 'center', marginTop: '20px' }}>
  <h2 className = "heui" style={{ color: '#fff' }}>Informatique Et Ingénierie de Données</h2>
</div>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <img src="./src/Images/soc.avif" alt="Social Network" style={{ width: '60px', height: '60px' }} />
  <div>
    {/* LinkedIn */}
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin style={{ fontSize: '24px', marginRight: '10px', color: '#B676B1' }} />
    </a>
    {/* Facebook */}
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook style={{ fontSize: '24px', marginRight: '10px', color: '#B676B1' }} />
    </a>
    {/* Twitter */}
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter style={{ fontSize: '24px', marginRight: '10px', color: '#B676B1' }} />
    </a>
    {/* Instagram */}
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram style={{ fontSize: '24px', marginRight: '10px', color: '#B676B1' }} />
    </a>
  </div>
</div>

    </div>
  );
};

export default EtudiantAcceuil;
