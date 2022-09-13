import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../context/auth";

export default function RequireAuth(props) {
  const { currentUser } = useAuth();
  let location = useLocation();
  console.log(props, location)

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else {
    return <props.element />;
  }

}
