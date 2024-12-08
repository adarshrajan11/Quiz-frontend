import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  keyframes,
} from "@mui/material";
import loginBg from "../assets/login-bg.avif";
import { useNavigate } from "react-router-dom";
import logo from "../assets/my-logo.png";

import AnimatedText from "../components/AnimatedText";
import { motion } from "framer-motion";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            backgroundColor: "#f5f5f5", // Light background for the input field
            borderRadius: "5px", // Rounded corners
          },
          "& .MuiInputLabel-root": {
            color: "#0C3B69", // Label color
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#ccc", // Default underline color
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "#0C3B69", // Hover color
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#1976d2", // Focus color
          },
        },
      },
    },
  },
});
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    background-color: #3f51b5;
  }
  50% {
    transform: scale(1.1);
    background-color: #f50057;
  }
  100% {
    transform: scale(1);
    background-color: #3f51b5;
  }
`;
const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login credentials:", credentials);
    if (!credentials) {
      alert("Please fill in all fields");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingLeft: "0px",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            height: "100vh",

            padding: 4,
            borderRadius: 2,
          }}
        >
          <Typography sx={{ mt: 40 }} variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              value={credentials.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              marginTop: "50px",
              height: "100px",
              ml: 15,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <AnimatedText text="Welcome to the FrontQuiz!" />
            <AnimatedText text=" A user-friendly quiz platform designed to help with frontend interview preparation." />
          </Box>
          <Box
            sx={{
              width: "200px",
              height: "200px",
              margin: "auto",
              ml: 80,

              backgroundColor: "#3f51b5",
              borderRadius: "16px",
              animation: `${pulseAnimation} 2s infinite ease-in-out`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Sample Image"
              sx={{
                width: "100%", // Adjust width
                maxWidth: "400px", // Limit maximum width
                height: "auto", // Maintain aspect ratio
                borderRadius: "16px", // Rounded corners
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Shadow effect
                margin: "20px auto",
              }}
            />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
