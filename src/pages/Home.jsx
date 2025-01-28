import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 animate-gradient"></div>
      <ParticlesBackground />
      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
          Welcome to Your Financial Future
        </h1>
        <p className="text-xl mb-8 animate-fade-in delay-100">
          Plan, save, and grow your wealth with our powerful tools.
        </p>
        <Link
          to="/financial-planning"
          className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-all duration-300 animate-fade-in delay-200"
        >
          Get Started
        </Link>
      </div>

      {/* Moving Circles (Decorative) */}
      <div className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-20 animate-float -top-32 -left-32"></div>
      <div className="absolute w-48 h-48 bg-blue-500 rounded-full opacity-20 animate-float -bottom-24 -right-24"></div>
    </div>
  );
};

export default Home;