import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Divider
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch (error) {
        console.error("Failed to fetch history");
      }
    };
    fetchHistory();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); 
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f7fb",
        px: { xs: 2, sm: 4 },
        py: 3
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3
        }}
      >
        <IconButton onClick={() => navigate("/home")}>
          <HomeIcon />
        </IconButton>

        <Typography variant="h6" sx={{ ml: 1, fontWeight: 600 , color: "black" }}>
          Meeting History
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Content */}
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        {meetings.length > 0 ? (
          <Grid container spacing={2}>
            {meetings.map((meeting, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: 3,
                      borderColor: "primary.main"
                    }
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                    >
                      Meeting Code
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {meeting.meetingCode}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      Date: {formatDate(meeting.date)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ mt: 5 }}
          >
            No meeting history available.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
