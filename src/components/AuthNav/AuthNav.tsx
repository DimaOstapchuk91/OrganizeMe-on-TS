import { NavLink } from 'react-router-dom';

const AuthNav: React.FC = () => {
  return (
    <ul className='md:flex'>
      <li>
        <NavLink
          className={({ isActive }) =>
            `mr-4 font-bold text-xl text-text-light transition-all duration-300 hover:text-green outline-none ${
              isActive ? '!text-green underline' : ''
            }`
          }
          to='/'
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `mr-4 font-bold text-xl text-text-light transition-all duration-300 hover:text-green outline-none ${
              isActive ? '!text-green underline' : ''
            }`
          }
          to='/register'
        >
          Registration
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `mr-4 font-bold text-xl text-text-light transition-all duration-300 hover:text-green outline-none ${
              isActive ? '!text-green underline' : ''
            }`
          }
          to='/login'
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
};
export default AuthNav;
