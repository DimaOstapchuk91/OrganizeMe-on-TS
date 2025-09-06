import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: JSX.Element;
  redirectTo: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
