import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { useEffect, useRef } from 'react';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contactData = useSelector(selectContacts);

  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current && contactData.length === 0) {
      dispatch(fetchContacts());
      firstLoad.current = false;
    }
  }, [dispatch, contactData]);

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
