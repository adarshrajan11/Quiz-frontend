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

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#FBE9D0" }}
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
        <Typography variant="h4" gutterBottom>
          Welcome to the Quiz Dashboard
        </Typography>

        {/* Statistics Grid2 */}
        <Grid2 container spacing={3} sx={{ mt: 2 }}>
          <Grid2 xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  10
                </Typography>
                <Typography color="text.secondary">Total Quizzes</Typography>
              </CardContent>
            </Card>
          </Grid2>
          <Grid2 xs={12} sm={4}>
            <Card>
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
          <Grid2 xs={12} sm={4}>
            <Card>
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
        <Grid2 container spacing={3} sx={{ mt: 4 }}>
          <Grid2 xs={12} sm={4}>
            <Card>
              <CardActionArea>
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
          <Grid2 xs={12} sm={4}>
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
          <Grid2 xs={12} sm={4}>
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
      </Box>
    </Box>
  );
};

export default UserDashboard;
