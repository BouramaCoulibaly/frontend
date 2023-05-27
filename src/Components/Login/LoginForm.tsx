import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Acceuil from '../Acceuil/acceuil';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginForm: React.FC = () => {
  const history = useNavigate();

  const [emailUniversitaire, setEmailUniversitaire] = useState('');
  const [cne, setCNE] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/etudiant/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emailUniversitaire,
          cne
        })
      });

      if (response.ok) {
        console.log('Login successful');
        // Perform any necessary actions after successful login
        history('/etudiant');
      } else {
        // Login failed
        console.log('Login failed');
        // Handle login failure, display error message, etc.
      }
      
    } catch (error) {
      // Error occurred during the API call
      console.error('Error:', error);
      // Handle error, display error message, etc.
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(./src/Components/eci.avif)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div style={{ width: '400px', background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
        <Acceuil />
        <Form>
          <Form.Group>
            <Form.Label><FaEnvelope className="input-icon" /> Enter your email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={emailUniversitaire}
              onChange={(e) => setEmailUniversitaire(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label><FaLock className="input-icon" /> Enter your password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={cne}
              onChange={(e) => setCNE(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
