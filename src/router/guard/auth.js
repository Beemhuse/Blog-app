import { Navigate, useLocation } from "react-router";
// import { useAuth } from "../../context/auth";
// import { connect } from "../../services/socket";

export default function RequireAuth(props) {
  const currentUser = true
  let location = useLocation();
  console.log(props.element)

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else {
    return <props.element />;
  }

}
