import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage ';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import Loader from './components/Loader/Loader';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { refreshUser } from './redux/auth/operations';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { selectIsRefreshing } from './redux/auth/selectors';
import { Toaster } from 'react-hot-toast';
import { selectTheme } from './redux/theme/selector';
import { AnimatePresence } from 'framer-motion';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route
                path='/register'
                element={
                  <RestrictedRoute
                    component={<RegistrationPage />}
                    redirectTo='/contacts'
                  />
                }
              />
              <Route
                path='/login'
                element={
                  <RestrictedRoute
                    component={<LoginPage />}
                    redirectTo='/contacts'
                  />
                }
              />
              <Route
                path='/contacts'
                element={
                  <PrivateRoute
                    component={<ContactsPage />}
                    redirectTo='/login'
                  />
                }
              />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Toaster />
          </Layout>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
