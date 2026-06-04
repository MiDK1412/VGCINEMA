import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth_context";

const Navbar = ({ onOpenAuth }) => {
  const { account, openAuth, logout } = useAuth();
  return (
    <div className="bg-white backdrop-blur-md shadow-md">
        <nav className="flex justify-between items-center px-10 py-4 text-red-600">

          <Link to="/"className="text-3xl font-bold text-red-500">
            CinemaX
          </Link>

          <div className="flex gap-8 text-lg">
            {
              account ? (
                <div className="flex items-center gap-3">
                  <span>{account.name}</span>
                  <button onClick = {logout}> Đăng xuất</button>
                </div>
              ) : (
                <button onClick= { openAuth } className="hover:text-red-400">Đăng nhập</button>
              )
            }                       
                           
          </div>
 
        </nav>

    </div>
  );
};

export default Navbar;