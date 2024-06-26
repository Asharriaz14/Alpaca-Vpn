import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UserAuth from './components/UserAuth';
import AfterLogin from './components/AfterLogin';

function App() {
  

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserAuth />} />
        <Route path="/register" element={<UserAuth />} />
        <Route path="/user-dashboard" element={<AfterLogin />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
