import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const HomePage = () => {
  const login = useSelector(selectIsLoggedIn);

  return (
    <div className='p-8 w-[90%]  md:w-[80%] bg-background m-auto bg-blue rounded-xl rounded-tl-none'>
      <h1 className='text-center text-text-light text-3xl font-bold mb-10'>
        Welcome to Your Personal Phonebook!{' '}
      </h1>
      <p className='text-text-light text-center text-xl font-bold mb-10'>
        Manage your contacts with ease. Add, delete, and update contacts
        securely.
      </p>
      {login ? (
        <p className='text-text-light text-center text-xl font-bold'>
          You're all set to manage your contacts. Go to the{' '}
          <NavLink className='underline text-green' to='/contacts'>
            Contacts
          </NavLink>{' '}
          page to view, add, update, or delete your contacts.
        </p>
      ) : (
        <p className='text-text-light text-center text-xl font-bold'>
          To get started, please{' '}
          <NavLink className='underline text-green' to='/register'>
            Register
          </NavLink>{' '}
          or{' '}
          <NavLink className='underline text-green' to='/login'>
            Login
          </NavLink>{' '}
          to access your phonebook.
        </p>
      )}
    </div>
  );
};
export default HomePage;
