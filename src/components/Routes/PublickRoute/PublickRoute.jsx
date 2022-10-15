import { Navigate } from 'react-router-dom';


export default function PublickRoute({isLoggedIn, children }) {

  if (!isLoggedIn) {
    return children;
  }
  return <Navigate to="/messages" replace={true} />;
}