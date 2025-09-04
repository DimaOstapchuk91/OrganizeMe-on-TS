import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { orderSchemaContact } from '../../utils/formValidation.js';
import { successfullyToast } from '../../utils/toast.js';
import { IoMdCloseCircleOutline } from 'react-icons/io';

export const EditContactModal = ({ closeModal, user }) => {
  const dispatch = useDispatch();

  const handleForm = values => {
    dispatch(updateContact({ id: user.id, ...values }));
    successfullyToast('Successfully change contact');
    closeModal();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleForm}
        validationSchema={orderSchemaContact}
      >
        <Form className='flex flex-col p-7 pt-3 w-full md:w-[360px] gap-4 rounded-xl shadow-custom-blue bg-background mb-6 z-10 '>
          <button
            type='button'
            className='p-1 w-8 self-end text-light-blue transition-all duration-300'
            onClick={closeModal}
          >
            <IoMdCloseCircleOutline className='w-8 h-8 text-text-light duration-300 transition-all hover:text-green' />
          </button>
          <h3 className='text-center text-green font-bold text-xl'>
            Change Contact
          </h3>
          <label className='flex flex-col gap-2 font-bold'>
            <div className='flex justify-between'>
              <p className='text-text-light'>Name</p>
              <ErrorMessage className='text-red' name='name' component='p' />
            </div>
            <Field
              className='py-2 px-5 h-8 rounded-md outline-none shadow-custom-black focus:border-2 focus:border-green'
              name='name'
            />
          </label>
          <label className='flex flex-col gap-2 font-bold'>
            <div className='flex justify-between'>
              <p className='text-text-light'>Number</p>
              <ErrorMessage className='text-red' name='number' component='p' />
            </div>
            <Field
              className='py-2 px-5 h-8 rounded-md outline-none shadow-custom-black focus:border-2 focus:border-green'
              name='number'
            />
          </label>
          <button
            className='py-2 px-5 m-auto font-bold bg-background text-text-light rounded-lg transition-all shadow-custom-btn hover:bg-hover-blue hover:text-green'
            type='submit'
          >
            Change
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default EditContactModal;
