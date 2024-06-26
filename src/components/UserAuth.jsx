import Star from '../assets/star4x.png';
import Register from './Form/Register';
import Login from './Form/Login';
import { useLocation } from 'react-router-dom';

function UserAuth() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <div className="w-full h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Star})` }}>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
}

export default UserAuth;
