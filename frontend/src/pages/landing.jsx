import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleJoinAsGuest = () => {
    const meetingCode = prompt("Enter Meeting Code");
    if (!meetingCode) return;
    navigate(`/${meetingCode}`);
  };

  return (
    <div className='landingPageContainer'>
      <nav>
        <div className="logoContainer">
          <img src="/logo.png" alt="Connect Meet Logo" className="logo" />
          <h2>Connect Meet</h2>
        </div>
        <div className='navlist'>
          <p onClick={handleJoinAsGuest}>Join as Guest</p>
          <p onClick={() => navigate("/auth")}>Register</p>
          <div role='button' onClick={() => navigate("/auth")}>
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Conversations</span> without boundaries
          </h1>
          <p>Video when needed, chat when easy</p>
          <div role='button'>
            <Link to="/auth">Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile1.png" alt="Video Call Illustration" />
        </div>
      </div>
    </div>
  );
}
