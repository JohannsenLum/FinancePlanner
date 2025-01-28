import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Financial Planner</h1>
      <nav className="flex flex-col gap-2">
        <Link to="/financial-planning" className="text-blue-500 underline">
          Financial Planning
        </Link>
        <Link to="/savings-goals" className="text-blue-500 underline">
          Savings Goals
        </Link>
        <Link to="/investment-calculator" className="text-blue-500 underline">
          Investment Calculator
        </Link>
        <Link to="/educational-resources" className="text-blue-500 underline">
          Educational Resources
        </Link>
      </nav>
    </div>
  );
};

export default Home;