import userImage from '../assets/userImage.png';
import { Pencil, TabletSmartphone } from 'lucide-react';
import Avatar from '../assets/avatar.jpg';
import { useState, useEffect } from 'react';
import Dollar from '../assets/dollar.png';
import Modal from "./Form/Modal.jsx";

function UserProfile() {
  const [showModal, setShowModal] = useState(false);
  
  const [profileData, setProfileData] = useState(null);
  const [deviceData, setDeviceData] = useState(null);
  const [userId, setUserId] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null); 

  useEffect(() => {
    const fetchId = () => {
      try {
        const id = sessionStorage.getItem('user_id');
        setUserId(id);
      } catch (error) {
        // console.error('Error fetching data from sessionStorage:', error);
      }
    };

    fetchId();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchUserProfile(userId);
      fetchUserDevices(userId);
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
      // console.log('Profile Data:', userData); 
  
      const profileData = userData.data;
      if (!profileData || !profileData.created_at) {
        throw new Error('Invalid profile data received');
      }
  
      let createdAt = profileData.created_at;
      let datePart = createdAt.split(' ')[0];  
      let [year, month, day] = datePart.split('-');
      let formattedDate = `${day}-${month}-${year}`;
  
      // console.log('Formatted Date:', formattedDate);
      
      setProfileData(profileData);
      setFormattedDate(formattedDate); 
    } catch (error) {
      // console.error('Error fetching user profile:', error);
    }
  };

  const fetchUserDevices = async (userId) => {
    try {
      const formData = new FormData();
      formData.append('user_id', userId);

      const apiUrl = 'https://apis.ciphermuse.tech/api/get-devices';

      const headers = new Headers();
      headers.append('Accept', 'application/json');

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: formData,
      };

      const response = await fetch(apiUrl, requestOptions);

      if (!response.ok) {
        throw new Error(`Failed to fetch user devices: ${response.status} ${response.statusText}`);
      }

      const deviceData = await response.json();
      // console.log('Device Data:', deviceData); 
      setDeviceData(deviceData.data); 
    } catch (error) {
      // console.error('Error fetching user devices:', error);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-2 md:mx-12 overflow-hidden bg-[#191717] md:rounded-[75px] mt-8">
        <div className="flex flex-col">
          {/* Cover Image */}
          <img
            src={userImage}
            alt="User Cover"
            className="w-full md:h-[10rem] "
          />

          {/* Profile Image */}
          <div className="md:w-[80%] sm-[100%] mx-auto flex">
            <img
              src={Avatar}
              alt="User Profile"
              className="rounded-full lg:w-[9rem] lg:h-[9rem] md:w-[8rem] md:h-[8rem] outline outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] my-3 md:my-0"
            />
          </div>

          <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 relative lg:-top-12 md:-top-6 sm:-top-4 xs:-top-4">
            {/* Name and Subscription */}
            <div className="">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center">
                  <h2 className="text-left font-bold text-white lg:text-3xl text-lg  sm:mx-4 my-3 md:my-0 xs:pl-4">
                    {profileData ? profileData.name : 'Loading...'}
                  </h2>
                  {/* <button className="ml-4 bg-[#262424] rounded-full px-5 py-2 text-sm text-white">
                    <Pencil className="w-4 h-4 text-white" />
                  </button> */}
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <h2 className="text-left text-white text-base sm:mx-4 xs:pl-4 my-3 md:my-0">
                    Monthly subscription
                  </h2>
                  <button className="ml-4 rounded-full px-8 py-2 text-lg text-white bg-primary">
                    Premium
                  </button>
                </div>
              </div>
              <h4 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-secondary text-md lg:-top-16 md:-top-6 sm:-top-4 xs:-top-4">
                Registered on: {formattedDate ? formattedDate : 'Loading...'}
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 my-10 justify-between max-w-screen-2xl mx-2 md:mx-12 overflow-hidden">
        {/* Contact Details */}
        <div className="w-full sm:w-2/5 overflow-hidden shadow rounded-lg border border-[#A1A1A1] md:mx-4 box">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-white">
                Contact Details
              </h3>
              {showModal && < Modal onClose ={() => setShowModal(false)} />}
              <button onClick={() => setShowModal(true)} className="text-sm font-medium text-gray-500 bg-[#323030] rounded-full p-2">
                <Pencil className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          <div className="px-4 py-5 sm:p-0">
            <dl className="">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-white">Email</dt>
                <dd className="mt-1 text-sm text-primary sm:mt-0 sm:col-span-2">
                  {profileData ? profileData.email : 'Loading...'}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-white">Contact</dt>
                <dd className="mt-1 text-sm text-primary sm:mt-0 sm:col-span-2">
                  {profileData && profileData.phone_number ? profileData.phone_number : 'Add phone number'}
                </dd>
              </div>
            </dl>
          </div>
          {/* Devices */}
          <div className="px-4 py-5 sm:px-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-white">
                Devices
              </h3>
            </div>
          </div>
          <div className="px-4 py-5 sm:p-0">
            <dl className="">
              {deviceData ? (
                deviceData.map(device => (
                  <div key={device.id} className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-white flex">
                      <TabletSmartphone className="w-4 h-4 mr-2" />
                      <label>{device.device_name}</label>
                    </dt>
                    <dd className="mt-1 text-sm text-primary sm:mt-0 sm:col-span-2">
                      {device.ip_address}
                    </dd>
                  </div>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </dl>
          </div>
        </div>
        <div className="w-full sm:w-3/5 overflow-hidden shadow rounded-lg border border-[#A1A1A1] md:mx-4 box">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-white">
               Payment Details
              </h3>
            </div>
           
          </div>
          <div className=" px-4 py-5 sm:p-0">
            <dl className="">
            <div className="flex justify-between py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex">
                  <img src={Dollar} alt=""  className='mr-4'/>
                  <label htmlFor="" className='text-tartiary text-sm'>
                  <span className='text-white text-base'>  
                     Monthly Subcription paid <br />
                    </span>
                  Today, 29 Aug at 10.20
                  </label>
                 
                </dd>
                <span className="text-base font-medium text-primary text-center">
                $54
                </span>
            </div>
            <div className="flex justify-between py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex">
                  <img src={Dollar} alt=""  className='mr-4'/>
                  <label htmlFor="" className='text-tartiary text-sm'>
                  <span className='text-white text-base'>  
                     Monthly Subcription paid <br />
                    </span>
                  Today, 29 Aug at 10.20
                  </label>
                 
                </dd>
                <span className="text-base font-medium text-primary text-center">
                $54
                </span>
            </div>
            <div className="flex justify-between py-3 md:py-5 md:grid md:grid-cols-3 md:gap-4 md:px-6  ">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex">
                  <img src={Dollar} alt=""  className='mr-4'/>
                  <label htmlFor="" className='text-tartiary text-sm'>
                  <span className='text-white text-base'>  
                     Monthly Subcription paid <br />
                    </span>
                  Today, 29 Aug at 10.20
                  </label>
                 
                </dd>
                <span className="text-base font-medium text-primary text-center">
                $54
                </span>
            </div>
            </dl>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default UserProfile;
