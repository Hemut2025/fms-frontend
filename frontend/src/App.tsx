import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationPanel from "./components/Navigation/NavigationPanel";
import Dashboard from "./components/Pages/Dashboard";
import Loads from "./components/Pages/Loads";
import Accounting from "./components/Pages/Accounting";
import Maintenance from "./components/Pages/Maintenance";
import Reports from "./components/Pages/Reports";
import Settings from "./components/Pages/Settings";
import Logout from "./components/Pages/Logout"; // Import the Logout component
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="app">
              <NavigationPanel />
              <main className="main-content">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/loads" element={<Loads />} />
                  <Route path="/accounting" element={<Accounting />} />
                  <Route path="/maintenance" element={<Maintenance />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/" element={<Dashboard />} />
                </Routes>
              </main>
            </div>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default App;
