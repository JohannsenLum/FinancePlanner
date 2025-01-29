import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-indigo-900/80 p-4 shadow-lg backdrop-blur-md">
      <ul className="flex space-x-6 justify-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white hover:text-blue-200 transition-all duration-300 font-semibold ${
                isActive ? "underline" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/financial-planning"
            className={({ isActive }) =>
              `text-white hover:text-blue-200 transition-all duration-300 font-semibold ${
                isActive ? "underline" : ""
              }`
            }
          >
            Financial Planning
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/milestones"
            className={({ isActive }) =>
              `text-white hover:text-blue-200 transition-all duration-300 font-semibold ${
                isActive ? "underline" : ""
              }`
            }
          >
            Milestones
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/savings-goals"
            className={({ isActive }) =>
              `text-white hover:text-blue-200 transition-all duration-300 font-semibold ${
                isActive ? "underline" : ""
              }`
            }
          >
            Savings Goals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/investment-calculator"
            className={({ isActive }) =>
              `text-white hover:text-blue-200 transition-all duration-300 font-semibold ${
                isActive ? "underline" : ""
              }`
            }
          >
            Investment Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/educational-resources"
            className={({ isActive }) =>
              `text-white hover:text-blue-200 transition-all duration-300 font-semibold ${
                isActive ? "underline" : ""
              }`
            }
          >
            Educational Resources
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;