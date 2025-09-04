import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { Reorder } from 'framer-motion';
import {
  selectContacts,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { useEffect, useState } from 'react';

const ContactList = () => {
  const searchUsers = useSelector(selectFilteredContacts);
  const contact = useSelector(selectContacts);
  const loader = useSelector(selectIsLoading);

  const [orderContact, setOrderContact] = useState([]);

  useEffect(() => {
    setOrderContact(searchUsers);
  }, [searchUsers]);

  return (
    <div className='w-full'>
      {contact.length > 0 ? (
        <Reorder.Group
          className='flex flex-col gap-6 relative'
          axis='y'
          values={orderContact}
          onReorder={setOrderContact}
        >
          {loader && <Loader />}
          {orderContact.map(item => (
            <Reorder.Item
              className='flex justify-between items-center p-4 w-full h-21 bg-bg-gray cursor-grab rounded-xl shadow-custom-black  will-change-transform'
              key={item.id}
              value={item}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <Contact user={item} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      ) : (
        <p className='font-bold text-center text-light-blue text-3xl'>
          Please Add contact
        </p>
      )}
    </div>
  );
};
export default ContactList;
