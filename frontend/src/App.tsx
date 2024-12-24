import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Pages/Dashboard";
import Loads from "./components/Pages/Loads";
import Accounting from "./components/Pages/Accounting";
import Maintenance from "./components/Pages/Maintenance";
import Reports from "./components/Pages/Reports";
import Tools from "./components/Pages/Tools";
import Dispatching from "./components/Pages/Dispatching";
import Invoices from "./components/Pages/Invoices";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/loads" element={<Loads />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/dispatching" element={<Dispatching />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
