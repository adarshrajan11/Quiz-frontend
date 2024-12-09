import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  CardActionArea,
  Grid2,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import QuizIcon from "@mui/icons-material/Quiz";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Sidebar from "../components/SIdebar";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PixRoundedIcon from "@mui/icons-material/PixRounded";
import Charts from "../components/Charts";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleCardClick = () => {
    navigate("/new-quiz");
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#272343",
      }}
    >
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} handleToggle={handleToggleSidebar} />

      {/* AppBar for mobile */}
      <AppBar position="fixed" sx={{ display: { sm: "none" } }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggleSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Quiz Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: { xs: 2, sm: 3 },
          marginTop: { xs: "64px", sm: 0 }, // Adjust for AppBar height
        }}
      >
        {/* Statistics Grid2 */}
        <Grid2
          container
          spacing={3}
          minWidth={false}
          sx={{ mt: 2, justifyContent: "center" }} // Center-align items
        >
          <Grid2
            xs={12}
            sm={8}
            md={6}
            sx={{ minWidth: { xs: "100%", md: 500 } }}
          >
            {/* Wider card */}
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                backgroundColor: "#E2F1E7",
              }}
            >
              <PixRoundedIcon
                color="primary"
                sx={{ fontSize: 50, marginRight: 2 }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  10
                </Typography>
                <Typography color="text.secondary">Total Quizzes</Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2
            xs={12}
            sm={8}
            md={6}
            sx={{ minWidth: { xs: "100%", md: 500 } }}
          >
            {/* Wider card */}
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                backgroundColor: "#E2F1E7",
              }}
            >
              <CheckCircleIcon
                color="success"
                sx={{
                  fontSize: 50,
                  marginRight: 2,
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  7
                </Typography>
                <Typography color="text.secondary">
                  Attempted Quizzes
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2
            xs={12}
            sm={8}
            md={6}
            sx={{ minWidth: { xs: "100%", md: 500 } }}
          >
            {/* Wider card */}
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                backgroundColor: "#E2F1E7",
              }}
            >
              <AssessmentIcon
                color="warning"
                sx={{ fontSize: 50, marginRight: 2 }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  85%
                </Typography>
                <Typography color="text.secondary">Average Score</Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>

        {/* Cards Grid2 */}
        <Grid2 container spacing={3} sx={{ mt: 4, justifyContent: "center" }}>
          <Grid2 xs={12} sm={6} md={4}>
            {" "}
            {/* Adjust width */}
            <Card>
              <CardActionArea onClick={handleCardClick}>
                <CardContent sx={{ textAlign: "center" }}>
                  <QuizIcon fontSize="large" color="primary" />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Attend a New Quiz
                  </Typography>
                  <Typography color="text.secondary">
                    Test your knowledge with a new quiz.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
          <Grid2 xs={12} sm={6} md={4}>
            {" "}
            {/* Adjust width */}
            <Card>
              <CardActionArea>
                <CardContent sx={{ textAlign: "center" }}>
                  <ErrorOutlineIcon fontSize="large" color="error" />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Review Wrong Questions
                  </Typography>
                  <Typography color="text.secondary">
                    Go through your mistakes and improve.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
          <Grid2 xs={12} sm={6} md={4}>
            {" "}
            {/* Adjust width */}
            <Card>
              <CardActionArea>
                <CardContent sx={{ textAlign: "center" }}>
                  <CheckCircleIcon fontSize="large" color="success" />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Completed Quizzes
                  </Typography>
                  <Typography color="text.secondary">
                    View quizzes you&apos;ve already completed.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        </Grid2>
        <Box sx={{ mt: 5, width: "100%", minHeight: "400px" }}>
          <Charts />
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard;
