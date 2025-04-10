import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, redirectTo }) => {
  const { currentUser } = useSelector((state) => state.user);

  if (!currentUser) {
    return (
      <Navigate to={redirectTo} state={{ redirectedFromCheckout: true }} />
    );
  }

  return children;
};

export default ProtectedRoute;
