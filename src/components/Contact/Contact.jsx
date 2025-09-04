import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useState } from 'react';
import EditContactModal from '../EditContactModal/EditContactModal';
import ReactModal from 'react-modal';
import ModalDelete from '../ModalDelete/ModalDelete';
import { IoIosContact } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { successfullyToast } from '../../utils/toast.js';

const Contact = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDellOpen, setIsModalDellOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteContactUser = () => {
    dispatch(deleteContact(user.id));

    successfullyToast('Successfully Deleted');
  };

  const handleOpenModal = openModal => {
    openModal(true);
  };
  const handleCloseModal = closeModal => {
    closeModal(false);
  };

  ReactModal.setAppElement('#root');

  return (
    <>
      <div>
        <p className='flex items-center font-bold text-text-light mb-2'>
          <IoIosContact className='w-6 h-6 mr-3 text-yellow' />

          {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
        </p>
        <p className='flex items-center font-bold text-text-light'>
          <FaPhone className='w-4 h-4 mr-4 text-green ml-1' /> {user.number}
        </p>
      </div>
      <div className='flex flex-col gap-1'>
        <button
          className='bg-red mb-1 opacity-70 text-text-light p-1 rounded-md transition-all duration-300 shadow-custom-btn hover:opacity-90 '
          type='button'
          onClick={() => handleOpenModal(setIsModalDellOpen)}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          onClick={() => handleOpenModal(setIsModalOpen)}
          className='bg-green opacity-80 text-text-light p-1 rounded-md transition-all shadow-custom-btn duration-300 hover:opacity-100'
        >
          <RiEdit2Line size={24} />
        </button>
        <ReactModal
          isOpen={isModalOpen}
          contentLabel={'Example Modal'}
          className='fixed inset-0 flex items-center justify-center'
        >
          <EditContactModal
            closeModal={() => handleCloseModal(setIsModalOpen)}
            user={user}
          />
        </ReactModal>
        <ReactModal
          isOpen={isModalDellOpen}
          contentLabel={'text'}
          className='fixed inset-0 flex items-center justify-center'
        >
          <ModalDelete
            closeModal={() => handleCloseModal(setIsModalDellOpen)}
            deleteContact={handleDeleteContactUser}
          />
        </ReactModal>
      </div>
    </>
  );
};
export default Contact;
