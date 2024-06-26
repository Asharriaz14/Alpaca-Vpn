import logo from "../assets/alpacaLogo.png";
import appleStore from '../assets/appstore.png';
import googlePlay from '../assets/GooglePlay.png';
import { navItems } from "../constants";
import { Link as ScrollLink } from 'react-scroll'; 


function Footer() {
  return (
    <footer className="px-3 pt-10 mt-20 pb-10 lg:px-28 bg-[#111111]">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            <img src={logo} alt="logo" className="h-20 w-20" />
            <span className="text-xl font-bold tracking-wide text-white">
              <span className="text-primary">Alpaca</span> VPN
            </span>
          </a>
          <div className="mt-6 lg:max-w-xl">
            <p className="text-sm text-tartiary">
              Unlock the Internet with Alpaca VPN. Browse Securely & Freely.
            </p>
            <div className="flex items-center gap-1 px-2">
              <a href="#" className="mr-8 my-4">
                <img src={googlePlay} alt="Playstore Button" className="h-10" />
              </a>
              <a href="#">
                <img src={appleStore} alt="App Store Button" className="h-10" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm text-tartiary items-center">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
