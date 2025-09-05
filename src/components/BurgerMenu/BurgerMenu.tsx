import { GiHamburgerMenu } from 'react-icons/gi';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { FaUser } from 'react-icons/fa';
import UserMenu from '../UserMenu/UserMenu';

const BurgerMenu: React.FC = () => {
  const login = useSelector(selectIsLoggedIn);

  return (
    <div className='md:hidden dropdown dropdown-bottom  flex items-center justify-start  mr-6'>
      {!login ? (
        <div>
          <div tabIndex={0} role='button' className=''>
            <GiHamburgerMenu className='text-text-light h-6 w-6 ' />
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content menu flex justify-center text-center  px-4 py-2  bg-background rounded-box z-[1] w-52 p-2 shadow left-[-150px]'
          >
            <li>
              <AuthNav />
            </li>
          </ul>
        </div>
      ) : (
        <div className=''>
          <div tabIndex={0} role='button' className=''>
            <FaUser className='text-text-light h-6 w-6 ' />
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content menu bg-background rounded-box z-[1] w-52  p-2 shadow left-[-150px]'
          >
            <li>
              <UserMenu />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default BurgerMenu;
