import { useEffect, useState } from 'react';
import Star from '../assets/star4x.png';
import Navbar from '../components/Navbar';
import HeroSection from "./HeroSection";
import Benefit from "./Benefit";
import Feature from './Feature';
import FeatureBoxes from './FeatureBoxes';
import Payment from './Payment';
import Footer from './Footer';

function Home() {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = () => {
      try {
        const id = sessionStorage.getItem('user_id'); 
        if (id) {
          setUserId(id);
        } else {
          // console.log('No user_id found in sessionStorage.');
        }
      } catch (error) {
        // console.error('Error fetching data from sessionStorage:', error);
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchUserProfile(userId);
    }
  }, [userId]);

  const fetchUserProfile = async (userId) => {
    try {
      const formData = new FormData();
      formData.append('user_id', userId);

      const apiUrl = 'https://apis.ciphermuse.tech/api/show-profile';

      const headers = new Headers();
      headers.append('Accept', 'application/json');

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: formData,
      };

      const response = await fetch(apiUrl, requestOptions);

      if (!response.ok) {
        throw new Error(`Failed to fetch user profile: ${response.status} ${response.statusText}`);
      }

      const userData = await response.json();
      // console.log('Profile Data:', userData); // Log profile data to console
      setProfileData(userData.data);
    } catch (error) {
      // console.error('Error fetching user profile:', error);
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar profileData={profileData} setProfileData={setProfileData} className="fixed" />
      <div className="w-full h-screen bg-no-repeat bg-cover mb-10" style={{ backgroundImage: `url(${Star})` }}>
        <HeroSection />
        <div id="benefit"> 
          <Benefit />
        </div>
        <section id='feature'>
          <Feature />
        </section>
        <FeatureBoxes />
        <section id="pricing"> 
          <Payment />
        </section>
        <Footer />

        {error && <p>Error: {error}</p>}
      
      </div>
    </>
  );
}

export default Home;
