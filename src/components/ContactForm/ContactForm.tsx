import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { orderSchemaContact } from '../../utils/formValidation';
import { successfullyToast } from '../../utils/toast';
import { AppDispatch } from '../../redux/store';
import { ContactFormValues } from '../../types/contacts.types';

const ContactForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleForm = (
    values: ContactFormValues,
    options: FormikHelpers<ContactFormValues>
  ): void => {
    dispatch(
      addContact({
        name: values.name.trim().toLowerCase(),
        number: values.number,
      })
    );

    successfullyToast('Successfully Add Contact');

    options.resetForm();
  };

  return (
    <div>
      <Formik<ContactFormValues>
        initialValues={{ name: '', number: '' }}
        onSubmit={handleForm}
        validationSchema={orderSchemaContact}
      >
        <Form className='flex flex-col p-7 w-full md:w-[300px] xl:w-[360px] gap-4 rounded-xl shadow-custom-black bg-bg-gray mb-6'>
          <h2 className='text-center text-text-light font-bold text-lg'>
            Add New Contact
          </h2>
          <label className='flex flex-col gap-2 font-bold'>
            <div className='flex justify-between'>
              <p className='text-text-light'>Name</p>
              <ErrorMessage
                className='text-red text-sm'
                name='name'
                component='p'
              />
            </div>
            <Field
              className='py-2 px-5 h-8 w-full rounded-md outline-none text-base font-medium shadow-custom-black hover:shadow-custom-btn-hover focus:shadow-custom-btn-hover  transition-all duration-300'
              name='name'
              placeholder='Enter Contact Name'
            />
          </label>
          <label className='flex flex-col gap-2 font-bold'>
            <div className='flex justify-between'>
              <p className='text-text-light'>Number</p>
              <ErrorMessage
                className='text-red text-sm'
                name='number'
                component='p'
              />
            </div>
            <Field
              className='py-2 px-5 h-8 w-full rounded-md  outline-none  text-base font-medium shadow-custom-black  hover:shadow-custom-btn-hover focus:shadow-custom-btn-hover  transition-all duration-300'
              name='number'
              placeholder='Enter Contact Number'
            />
          </label>
          <button
            className='py-2 px-5 m-auto font-bold bg-background text-text-light rounded-lg transition-all shadow-custom-btn hover:bg-hover-blue hover:text-green'
            type='submit'
          >
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
