import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import MobileBottomMenu from '../MobileBottomMenu/MobileBottomMenu.jsx';

const AppBar = () => {
  const login = useSelector(selectIsLoggedIn);
  return (
    <div className='pt-4 w-full relative'>
      <div className='flex w-[90%] md:w-[80%] mx-auto  rounded-xl mb-6  md:mb-10 py-4 px-6 mb:px-12 justify-between bg-background items-center'>
        <NavLink to='/' className='text-text-light font-bold text-2xl'>
          Organize<span className='text-green'>Me</span>
        </NavLink>
        <div className='flex'>
          <div className='hidden md:flex'>
            {!login && <AuthNav />}
            {login && <UserMenu />}
          </div>
          <BurgerMenu className='block md:hidden' />
          <ThemeToggleButton />
        </div>
      </div>
      <div className='hidden md:flex mb-[11px] w-[90%] md:w-[80%] mx-auto'>
        <Navigation />
      </div>
      {login && (
        <div className='block w-full  md:hidden fixed bottom-0 mx-auto z-50'>
          <MobileBottomMenu />
        </div>
      )}
    </div>
  );
};
export default AppBar;
