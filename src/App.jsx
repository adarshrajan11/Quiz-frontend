import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import UserDashboard from "./pages/UserDashboard";
import Newquiz from "./pages/Newquiz";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/new-quiz" element={<Newquiz />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
