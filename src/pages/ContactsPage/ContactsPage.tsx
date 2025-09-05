import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect, useRef } from 'react';
import { selectContacts } from '../../redux/contacts/selectors';
import { AppDispatch } from '../../redux/store';

const ContactsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contactData = useSelector(selectContacts);

  const firstLoad = useRef<boolean>(true);

  useEffect(() => {
    if (firstLoad.current && contactData.length === 0) {
      dispatch(fetchContacts());
      firstLoad.current = false;
    }
  }, [dispatch]);

  return (
    <div
      className='flex flex-col items-center md:flex-row
    w-[90%] md:w-[80%] m-auto bg-background p-8 rounded-xl gap-2 md:gap-8 '
    >
      <ContactForm />

      <div className='flex flex-col w-full'>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};
export default ContactsPage;
