import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearchUser = event => {
    const form = event.target;
    dispatch(changeFilter(form.value.toLowerCase()));
  };
  return (
    <div className='flex justify-center mb-4 p-4 w-[100%] bg-bg-gray rounded-xl shadow-custom-black'>
      <label className='flex items-center  text-lg font-bold gap-2'>
        <FaSearch className='fill-text-light' />
        <input
          className='py-2 px-5 w-full h-8 rounded-md outline-none text-base font-medium focus:border-2 focus:border-green shadow-custom-btn '
          placeholder='Enter Name/Number'
          type='text'
          onChange={handleSearchUser}
        />
      </label>
    </div>
  );
};
export default SearchBox;
