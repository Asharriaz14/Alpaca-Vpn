import PropTypes from 'prop-types';
import logo from "../assets/alpacaLogo.png";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "../constants";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll'; 

const Navbar = ({ profileData, setProfileData }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // console.log('Logging out');
    sessionStorage.removeItem('user_id'); 
    setProfileData(null); 
    setDropdownOpen(false);
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
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-secondary">
            {navItems.map(({ link, path }) => (
              <ScrollLink
                key={link}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className='block hover:text-gray-300 cursor-pointer uppercase'
                activeClass='active'
              >
                {link}
              </ScrollLink>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center relative">
            {profileData ? ( 
              <div className="relative">
                <button onClick={toggleDropdown} className="bg-primary py-2 px-10 rounded-full text-white font-semibold text-transform: uppercase tracking-widest">
                  {profileData.name}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <RouterLink to="/user-dashboard" className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">User Dashboard</RouterLink>
                    <button onClick={handleLogout} className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 w-full text-left">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <RouterLink
                to="/login"
                className="bg-primary py-2 px-10 rounded-full text-white font-semibold text-transform: uppercase tracking-widest"
              >
                Login
              </RouterLink>
            )}
          </div>
          <div className="lg:hidden flex justify-end">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className=" text-white  top-0 right-0 z-20 bg-neutral-900 w-full h-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map(({ link, path }) => (
                <ScrollLink
                  key={link}
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className='block hover:text-primary cursor-pointer uppercase py-3'
                  activeClass='active'
                >
                  {link}
                </ScrollLink>
              ))}
            </ul>
            <div className="flex space-x-6 mt-6">
              {profileData ? ( 
                <div className="relative">
                  <button onClick={toggleDropdown} className="bg-primary py-2 px-10 rounded-full text-white font-semibold text-transform: uppercase tracking-widest">
                    {profileData.name}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                      <RouterLink to="/user-dashboard" className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100">User Dashboard</RouterLink>
                      <button onClick={handleLogout} className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 w-full text-left">Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <RouterLink
                  to="/login"
                  className="bg-primary py-2 px-10 rounded-full text-white font-semibold text-transform: uppercase tracking-widest"
                >
                  Login
                </RouterLink>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  profileData: PropTypes.object,
  setProfileData: PropTypes.func.isRequired, 
};

export default Navbar;
