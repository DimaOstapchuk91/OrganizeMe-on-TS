import { useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { changeFilter } from '../../redux/filters/slice.js';
import { AppDispatch } from '../../redux/store.js';
import { ChangeEvent } from 'react';

const SearchBox: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSearchUser = (event: ChangeEvent<HTMLInputElement>) => {
    const form = event.target;
    dispatch(changeFilter(form.value.toLowerCase()));
  };
  return (
    <div className='flex justify-center mb-4 p-4 w-[100%] bg-bg-gray rounded-xl shadow-custom-black'>
      <label className='flex items-center  text-lg font-bold gap-2'>
        <FaSearch className='fill-text-light' />
        <input
          className='py-2 px-5 w-full h-8 rounded-md outline-none text-base font-medium focus:border-green shadow-custom-btn hover:shadow-custom-btn-hover focus:shadow-custom-btn-hover  transition-all duration-300 '
          placeholder='Enter Name/Number'
          type='text'
          onChange={handleSearchUser}
        />
      </label>
    </div>
  );
};
export default SearchBox;
