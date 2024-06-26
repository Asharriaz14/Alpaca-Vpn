import logo from "../assets/alpacaLogo.png";
import { Menu, X, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { userNavItems } from "../constants";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    console.log('Logging out');
    sessionStorage.removeItem('user_id'); 
    navigate('/'); 
  };

  return (
    <nav className={`sticky top-0 z-50 py-5 ${isSticky ? 'backdrop-blur-lg border-b' : 'bg-transparent'}`}>
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 mr-2" />
            <span className="text-xl tracking-wide text-dark font-semibold">
              <span className="text-primary">ALPACA</span> VPN
            </span>
            <ul className="hidden lg:flex lg:flex-row ml-14 space-x-12 text-secondary">
              {userNavItems.map(({ link, path }) => (
                <RouterLink
                  key={link}
                  to={path}
                  className='flex hover:text-gray-300 cursor-pointer uppercase'
                >
                 <ChevronLeft to='/' className="w-5 h-5 mr-5" /> {link}
                </RouterLink>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button
              onClick={handleLogout}
              className="bg-transparent border border-[#FF000A] py-2 px-10 rounded-full text-[#FF000A] font-medium text-transform: uppercase tracking-widest"
            >
              Logout
            </button>
          </div>
          <div className="lg:hidden flex justify-end">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className=" top-0 right-0 z-20 bg-neutral-900 w-full h-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {userNavItems.map(({ link, path }) => (
                <RouterLink
                  key={link}
                  to={path}
                  className='block hover:text-gray-300 cursor-pointer uppercase'
                  activeClassName='active' 
                >
                  {link}
                </RouterLink>
              ))}
            </ul>
            <div className="flex space-x-6 mt-6">
              <button
                onClick={handleLogout}
                className="bg-transparent border border-[#FF000A] py-2 px-10 rounded-full text-[#FF000A] font-medium text-transform: uppercase tracking-widest"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default UserNavbar;
