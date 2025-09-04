import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logaut } from '../../redux/auth/operations';
import { velcomeToast } from '../../utils/toast.js';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  const handleExit = () => {
    velcomeToast(`Goodbye ${userName.name}`);
    dispatch(logaut());
  };

  return (
    <div className='flex gap-4 items-center'>
      <h2 className='text-text-light font-bold text-2xl'>
        Hello!{' '}
        <span className='text-green'>
          {userName.name.charAt(0).toUpperCase() + userName.name.slice(1)}
        </span>
      </h2>
      <button
        onClick={handleExit}
        className='py-1 px-5 mr-4 rounded-md border-2 border-green text-text-light font-bold transition-all duration-300 hover:text-green '
      >
        Exit
      </button>
    </div>
  );
};
export default UserMenu;
