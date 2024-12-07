import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import loginBg from "../assets/login-bg.avif";
import { useNavigate } from "react-router-dom";

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
        sx={{
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            alignItems: "center",

            padding: 4,
            borderRadius: 2,
            boxShadow: 10,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
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
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
