import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div className="navBar">
        <div className="logoContainer">
          <img src="/logo.png" alt="Connect Meet Logo" className="logo" />
          <h2>Connect Meet</h2>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton onClick={() => navigate("/history")}>
            <RestoreIcon />
          </IconButton>
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <h2>Connect beyond walls</h2>
          <div style={{ display: 'flex', gap: "10px", flexWrap: 'wrap' }}>
            <TextField
              onChange={e => setMeetingCode(e.target.value)}
              id="outlined-basic"
              label="Meeting Code"
              variant="outlined"
            />
            <Button onClick={handleJoinVideoCall} variant='contained'>
              Join
            </Button>
          </div>
        </div>
        <div className='rightPanel'>
          <img src='/bg1.png' alt="Video Call" />
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
