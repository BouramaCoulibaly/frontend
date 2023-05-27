import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm';
import EtudiantAcceuil from './Components/Etudiant/EtudiantAcceuil';
import Dashboard from './Components/DashboardEtd/exdashboard';
import LeftSideBar from './Components/DashboardEtd/leftsidebar'; // Import the LeftSideBar component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/etudiant" element={<EtudiantAcceuil />} />
        <Route path="/Examens" element={<Dashboard />} />
      </Routes>
    {/*<LeftSideBar />*/}{/* Render the LeftSideBar component */}
    </Router>
  );
};

export default App;
