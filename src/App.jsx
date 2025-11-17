import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import SystemHealth from "./pages/SystemHealth";
import Analysis from "./pages/Analysis";
import InstallerGuide from "./pages/InstallerGuide";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/system-health" element={<SystemHealth />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/installer" element={<InstallerGuide />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
}
