import { AiOutlineHome } from 'react-icons/ai';
import { RiContactsBook3Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const MobileBottomMenu = () => {
  return (
    <div className='bg-background  w-[90%] p-2 px-6 pb-2 mx-auto rounded-t-xl'>
      <nav className=''>
        <ul className='flex justify-center'>
          <li className='mr-4 h-8 w-8'>
            <NavLink
              className={({ isActive }) =>
                `text-text-light mr-4 transition-all duration-300 hover:text-green ${
                  isActive ? '!text-green' : ''
                }`
              }
              to='/'
            >
              <AiOutlineHome className='h-auto w-8' />
            </NavLink>
          </li>

          <li className='h-8 w-8'>
            <NavLink
              className={({ isActive }) =>
                `text-text-light transition-all duration-300 hover:text-green ${
                  isActive ? '!text-green' : ''
                }`
              }
              to='/contacts'
            >
              <RiContactsBook3Line className='h-auto w-8' />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MobileBottomMenu;
