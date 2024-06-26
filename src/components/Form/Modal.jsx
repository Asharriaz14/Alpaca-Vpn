import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Modal({ onClose }) {
    const modalRef = useRef();
    const [profileData, setProfileData] = useState(null);
    const [userId, setUserId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');  // phone_number state

    useEffect(() => {
        const fetchId = () => {
            try {
                const id = sessionStorage.getItem('user_id');
                setUserId(id);
                console.log('User ID:', id);
            } catch (error) {
                console.error('Error fetching data from sessionStorage:', error);
            }
        };

        fetchId();
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

            console.log('Fetching user profile with ID:', userId);
            const response = await fetch(apiUrl, requestOptions);

            if (!response.ok) {
                throw new Error(`Failed to fetch user profile: ${response.status} ${response.statusText}`);
            }

            const userData = await response.json();
            console.log('Profile Data:', userData);

            const profileData = userData.data;
            if (!profileData || !profileData.created_at) {
                throw new Error('Invalid profile data received');
            }

            setProfileData(profileData);
            setName(profileData.name || '');
            setEmail(profileData.email || '');
            setPhone(profileData.phone_number || '');  // setting phone_number
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const updateProfile = async () => {
        if (!name || !email || !phone) {
            alert('Please fill out all fields.');
            return;
        }

        const formData = new FormData();
        formData.append('user_id', userId);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone_number', phone);  // updating phone_number

        try {
            console.log('Updating profile with data:', {
                user_id: userId,
                name: name,
                email: email,
                phone_number: phone  // logging phone_number
            });

            const response = await fetch(
                'https://apis.ciphermuse.tech/api/edit-profile',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                    },
                    body: formData,
                }
            );

            const result = await response.json();

            if (response.ok) {
                // alert('Profile Updated', 'Your profile has been updated successfully.');
                onClose(); 
                window.location.reload(); 
            } else {
                alert('Error', result.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Error', 'Something went wrong. Please try again.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile();
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    return (
        <div
            ref={modalRef}
            onClick={closeModal}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
            style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%' }}
        >
            <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div
                    className="py-8 px-4 form-shadow rounded-3xl sm:px-10"
                    style={{
                        background: 'linear-gradient(90deg, rgba(23,23,23,1) 0%, rgba(0,0,0,1) 100%)'
                    }}
                >
                    <h2 className="my-6 text-center text-3xl leading-9 font-semibold text-white">
                        Edit Profile
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-md font-medium leading-5 text-white ml-2"
                            >
                                Name:
                            </label>
                            <div className="my-3 relative rounded-full shadow-sm">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Enter Your Full Name"
                                    className="appearance-none text-white block mt-3 mb-8 bg-transparent w-full py-3 px-5 border border-primary rounded-full placeholder-tartiary focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-md font-medium leading-5 text-white ml-2"
                            >
                                Email Address:
                            </label>
                            <div className="my-3 relative rounded-full shadow-sm">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Enter Your Email Address"
                                    className="appearance-none text-white block mt-3 mb-8 bg-transparent w-full py-3 px-5 border border-primary rounded-full placeholder-tartiary focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="phone"
                                className="block text-md font-medium leading-5 text-white ml-2"
                            >
                                Phone:
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    placeholder="Enter Your Phone Number"
                                    className="appearance-none text-white block mt-3 mb-8 bg-transparent w-full py-3 px-5 border border-primary rounded-full placeholder-tartiary focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                >
                                    Update
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default Modal;
