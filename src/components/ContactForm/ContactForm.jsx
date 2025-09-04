import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { orderSchemaContact } from '../../utils/formValidation.js';
import { successfullyToast } from '../../utils/toast.js';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleForm = (values, options) => {
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
      <Formik
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
              <ErrorMessage className='text-red' name='name' component='p' />
            </div>
            <Field
              className='py-2 px-5 h-8 w-full rounded-md outline-none text-base font-medium shadow-custom-black focus:border-2 focus:border-green'
              name='name'
              placeholder='Enter Contact Name'
            />
          </label>
          <label className='flex flex-col gap-2 font-bold'>
            <div className='flex justify-between'>
              <p className='text-text-light'>Number</p>
              <ErrorMessage className='text-red' name='number' component='p' />
            </div>
            <Field
              className='py-2 px-5 h-8 w-full rounded-md  outline-none  text-base font-medium shadow-custom-black  focus:border-2 focus:border-green'
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
