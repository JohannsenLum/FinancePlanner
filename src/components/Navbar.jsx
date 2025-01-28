import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/financial-planning" className="hover:underline">
            Financial Planning
          </Link>
        </li>
        <li>
          <Link to="/savings-goals" className="hover:underline">
            Savings Goals
          </Link>
        </li>
        <li>
          <Link to="/investment-calculator" className="hover:underline">
            Investment Calculator
          </Link>
        </li>
        <li>
          <Link to="/educational-resources" className="hover:underline">
            Educational Resources
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;