import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const usertype = 'user'; // Hardcoded usertype
  const navigation = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!fullname || !email || !password || !confirmPassword) {
      alert('All fields are required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', confirmPassword);
    formData.append('usertype', usertype);

    const apiUrl = '/api/signup';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (response.ok) {
        alert('Signup Successful');
        navigation('/login'); 
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <div className="my-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 form-shadow sm:rounded-lg sm:px-10 " style={{ background: 'linear-gradient(90deg, rgba(23,23,23,1) 0%, rgba(0,0,0,1) 100%)' }}>
          <h2 className="my-6 text-center text-3xl leading-9 font-semibold text-white">Register</h2>
          <form onSubmit={handleSignup}>
            <div>
              <label htmlFor="fullname" className="block text-md font-medium leading-5 text-white ml-2">Full Name:</label>
              <div className="my-3 relative rounded-full shadow-sm">
                <input id="fullname" name="fullname" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} required placeholder="Enter Your Full Name" className="appearance-none text-white block mt-3 mb-8 bg-transparent w-full py-3 px-5 border border-primary rounded-full placeholder-tartiary focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-md font-medium leading-5 text-white ml-2">Email Address:</label>
              <div className="my-3 relative rounded-full shadow-sm">
                <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter Your email address" className="appearance-none text-white block mt-3 mb-8 bg-transparent w-full py-3 px-5 border border-primary rounded-full placeholder-tartiary focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="password" className="block text-md font-medium leading-5 text-white ml-2">Password:</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" className="appearance-none text-white block mt-3 mb-8 bg-transparent w-full py-3 px-5 border border-primary rounded-full placeholder-tartiary focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="confirmPassword" className="block text-md font-medium leading-5 text-white ml-2">Confirm Password:</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input id="confirmPassword" name="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Enter your confirm password" className="appearance-none text-white block mt-3 mb-8 bg-transparent w-full py-3 px-5 border border-primary rounded-full placeholder-tartiary focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember_me" name="remember" type="checkbox" className="form-checkbox h-4 w-4 text-primary transition duration-150 ease-in-out" />
                <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-tartiary">Remember me</label>
              </div>

              <div className="text-sm leading-5">
                <a href="#" className="font-medium text-tartiary hover:text-primary focus:outline-none focus:underline transition ease-in-out duration-150">Forgot your password?</a>
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button type="submit" className="w-full flex justify-center py-3 px-5 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">Sign up</button>
              </span>
            </div>

            <div className="mt-6 items-center text-center">
              <div className="text-sm leading-5">
                Already have an Account? <Link to="/login" className="text-primary  hover:text-white">Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;