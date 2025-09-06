import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useState } from 'react';
import EditContactModal from '../EditContactModal/EditContactModal';
import ReactModal from 'react-modal';
import ModalDelete from '../ModalDelete/ModalDelete';
import { IoIosContact } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { successfullyToast } from '../../utils/toast';
import { AppDispatch } from '../../redux/store';
import { ContactData } from '../../types/contacts.types';

interface ContactProps {
  contactItem: ContactData;
}

const Contact: React.FC<ContactProps> = ({ contactItem }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalDellOpen, setIsModalDellOpen] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteContactUser = () => {
    dispatch(deleteContact(contactItem.id));

    successfullyToast('Successfully Deleted');
  };

  ReactModal.setAppElement('#root');

  return (
    <>
      <div>
        <p className='flex items-center font-bold text-text-light mb-2'>
          <IoIosContact className='w-6 h-6 mr-3 text-yellow' />

          {contactItem.name.charAt(0).toUpperCase() + contactItem.name.slice(1)}
        </p>
        <p className='flex items-center font-bold text-text-light'>
          <FaPhone className='w-4 h-4 mr-4 text-green ml-1' />{' '}
          {contactItem.number}
        </p>
      </div>
      <div className='flex flex-col gap-1'>
        <button
          className='bg-red mb-1 opacity-70 text-text-light p-1 rounded-md transition-all duration-300 shadow-custom-btn hover:opacity-90 '
          type='button'
          onClick={() => setIsModalOpen(true)}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          onClick={() => setIsModalDellOpen(false)}
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
            closeModal={() => setIsModalOpen(false)}
            contactItem={contactItem}
          />
        </ReactModal>
        <ReactModal
          isOpen={isModalDellOpen}
          contentLabel={'text'}
          className='fixed inset-0 flex items-center justify-center'
        >
          <ModalDelete
            closeModal={() => setIsModalDellOpen(false)}
            deleteContact={handleDeleteContactUser}
          />
        </ReactModal>
      </div>
    </>
  );
};
export default Contact;
