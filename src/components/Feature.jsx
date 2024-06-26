import FeatureImage from '../assets/featureImage.png';
// import appImage from '../assets/appImage.png'
import appImageone from '../assets/appimageone.png'
import appImagetwo from '../assets/appimagetwo.png'
function Feature() {
  return (
    <div className="max-w-s mx-auto space-y-10 my-16 text-center">
      <div className="bg-no-repeat bg-contain bg-center " style={{ backgroundImage: `url(${FeatureImage})` }}>
      <h2 className="text-xl text-primary font-medium tracking-normal leading-relaxed mb-3.5 uppercase">FEATURES</h2>
      <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-white tracking-normal leading-relaxed mb-5">Features Designed for You</h2>
      <p className="text-tartiary text-lg mb-1  ">It`s a comprehensive suite of features designed to empower<br />your online experience</p>
      <div className="flex flex-col md:flex-row justify-center  mt-20  lg:mt-40">
        <div className="h-2/5  m-auto md:mx-2 ">
        <img src={appImageone} alt=""  />
        
        </div>
        <div className="h-2/5   m-auto md:mx-2 ">
        <img src={appImagetwo} alt=""  />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Feature;
