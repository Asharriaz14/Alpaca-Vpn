import worldImage from '../assets/432.png';
import appleStore from '../assets/appstore.png';
import googlePlay from '../assets/GooglePlay.png';
import '../App.css';

const HeroSection = () => {
  return (
    <div className="max-w-screen-2xl mx-auto overflow-hidden" id="about">
      <div className="relative flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-2/5 mx-auto lg:-mt-32 md:px-8 p-4 text-container">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-white tracking-normal leading-relaxed mb-5">
            Unlock the Internet with <span className="text-primary">Alpaca</span> VPN. Browse Securely & Freely.
          </h2>
          <p className="text-tartiary text-lg mb-7">Experience True Online Freedom with Unbreakable Security.</p>
          <div className="flex">
            <div className="w-[150px] md:w-[180px] mr-3">
              <img src={appleStore} alt="Apple Store Image" />
            </div>
            <div className="w-[150px] md:w-[180px]">
              <img src={googlePlay} alt="Google Play Image" />
            </div>
          </div>
          <button className="btnPrimary">Get Started</button>
        </div>
        <div className="image-container">
          <img src={worldImage} alt="About Thinking Image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
