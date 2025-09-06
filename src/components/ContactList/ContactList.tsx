import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { Reorder } from 'framer-motion';

import { useEffect, useState } from 'react';
import {
  selectContacts,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { ContactData } from '../../types/contacts.types';

const ContactList: React.FC = () => {
  const searchUsers = useSelector(selectFilteredContacts);
  const contact = useSelector(selectContacts);
  const loader = useSelector(selectIsLoading);

  const [orderContact, setOrderContact] = useState<ContactData[]>([]);

  useEffect(() => {
    setOrderContact(searchUsers);
  }, [searchUsers]);

  return (
    <div className='w-full'>
      {contact.length > 0 ? (
        <Reorder.Group<ContactData>
          className='flex flex-col gap-6 relative'
          axis='y'
          values={orderContact}
          onReorder={setOrderContact}
        >
          {loader && <Loader />}
          {orderContact.map(item => (
            <Reorder.Item<ContactData>
              className='flex justify-between items-center p-4 w-full h-21 bg-bg-gray cursor-grab rounded-xl shadow-custom-black  will-change-transform'
              key={item.id}
              value={item}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <Contact contactItem={item} />
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
