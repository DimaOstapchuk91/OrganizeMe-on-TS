import { IoMdCloseCircleOutline } from 'react-icons/io';

const ModalDelete = ({ closeModal, deleteContact }) => {
  const handleDell = () => {
    deleteContact();
    closeModal();
  };

  return (
    <div className='flex flex-col bg-background md:w-[400px] rounded-xl p-6'>
      <button
        type='button'
        className='p-1 w-8 self-end  mb-2 '
        onClick={closeModal}
      >
        <IoMdCloseCircleOutline className='w-8 h-8 text-text-light duration-300 transition-all hover:text-green' />
      </button>
      <div className='bg-light-blue rounded-lg p-4'>
        <p className='font-bold text-center text-text-light mb-6'>
          Are you sure you want to delete?
        </p>
        <div className='flex justify-around'>
          <button
            className='bg-red opacity-90 py-1 px-4 text-light-blue rounded-md font-bold transition-all duration-300 text-text-light  shadow-custom-btn hover:opacity-70'
            onClick={handleDell}
          >
            Sure
          </button>
          <button
            className='py-2 px-5  font-bold bg-background text-text-light rounded-lg transition-all shadow-custom-btn hover:bg-hover-blue hover:text-green'
            onClick={() => closeModal()}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalDelete;
