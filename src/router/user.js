
import CreatePost from "../pages/createPost"
import Dashboard from "../pages/user/dashboard"

const UserRoutes = [
  { path: 'dashboard', element: <Dashboard /> },  
  { path: 'post', element: <CreatePost /> },  

]

export default UserRoutes