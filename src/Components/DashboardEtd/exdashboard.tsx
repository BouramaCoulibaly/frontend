import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideBar from './leftsidebar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Bell } from 'react-bootstrap-icons';
import Table from '../Tableau/tab';

function Dashboard() {
  const back = {
    backgroundColor: '#F2F3F4'
  };

  const imageStyle: React.CSSProperties = {
    left: 0,
    width: '250px',
    height: '100%',
    backgroundColor: '#F2F3F4',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px'
  };

  const bottomNavStyle: React.CSSProperties = {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <>
      <Navbar style={back}>
        <Container>
          <img src="./src/Images/i.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
          <Navbar.Brand>
            <Bell style={{ marginTop: '5px', color: '#75C0E0' }} />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <LeftSideBar />

      <div style={imageStyle}>
        <img src="./src/Images/exoi.avif" alt="Image" style={{ width: '100%', maxWidth: '500px' }} />
      </div>

      <div style={bottomNavStyle}>
        <Table />
      </div>
    </>
  );
}

export default Dashboard;
