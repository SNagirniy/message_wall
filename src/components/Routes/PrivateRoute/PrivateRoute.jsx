
import { Navigate } from 'react-router-dom';


export default function PrivateRoute({isLoggedIn, children }) {

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
}