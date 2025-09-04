import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { selectIsError } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { orderSchemaLogin } from '../../utils/formValidation.js';
import { errToast } from '../../utils/toast.js';

const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(selectIsError);

  const handleLogin = value => {
    dispatch(login(value));

    if (errorLogin) {
      errToast('User Not Found!');
      return;
    }
  };

  return (
    <div className='p-8 w-[90%] md:w-[80%] bg-background m-auto bg-blue rounded-xl'>
      <h2 className='text-center text-text-light font-bold text-4xl mb-8'>
        Login
      </h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={orderSchemaLogin}
        onSubmit={handleLogin}
      >
        <Form className='flex flex-col max-w-[400px] m-auto items-center gap-4 bg-bg-gray  p-8 rounded-xl'>
          <label className='flex flex-col font-semibold'>
            <div className='flex justify-between'>
              <p className='text-text-light mb-1'>Login</p>
              <ErrorMessage className='text-red' name='email' component='p' />
            </div>
            <Field
              className='py-2 px-5 h-8 w-full rounded-md outline-none  text-base font-medium shadow-custom-black focus:border-green focus:border-2'
              name='email'
              placeholder='Enter the Login'
            />
          </label>
          <label className='flex flex-col font-semibold mb-2'>
            <div className='flex justify-between'>
              <p className='text-text-light mb-1'>Password</p>
              <ErrorMessage
                className='text-red'
                name='password'
                component='p'
              />
            </div>
            <Field
              className='py-2 px-5 h-8 w-full rounded-md outline-none  text-base font-medium shadow-custom-black focus:border-green focus:border-2'
              name='password'
              placeholder='Enter the password'
            />
          </label>
          <button
            className='py-2 px-10 m-auto font-bold bg-background text-text-light rounded-lg transition-all shadow-custom-btn hover:bg-hover-blue hover:text-green'
            type='submit'
          >
            Login
          </button>
          <NavLink
            className='underline text-text-light opacity-50 transition-all duration-300 hover:text-green'
            to='/register'
          >
            Not have account? Register
          </NavLink>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
