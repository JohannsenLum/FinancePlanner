import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FinancialPlanning from "./pages/FinancialPlanning";
import SavingsGoals from "./pages/SavingsGoals";
import InvestmentCalculator from "./pages/InvestmentCalculator";
import EducationalResources from "./pages/EducationalResources";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {Navbar}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/financial-planning" element={<FinancialPlanning />} />
          <Route path="/savings-goals" element={<SavingsGoals />} />
          <Route path="/investment-calculator" element={<InvestmentCalculator />} />
          <Route path="/educational-resources" element={<EducationalResources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;