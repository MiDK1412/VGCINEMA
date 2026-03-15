import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md shadow-md">
        <nav className="flex justify-between items-center px-10 py-4 text-red-600">

          <Link to="/" className="text-3xl font-bold text-red-500">
            CinemaX
          </Link>

          <div className="flex gap-8 text-lg">
            <Link to="/" className="hover:text-red-400">Home</Link>
            <Link to="/login" className="hover:text-red-400">Login</Link>
            <Link to="/register" className="hover:text-red-400">Register</Link>
          </div>
 
        </nav>

    </div>
  );
};

export default Navbar;