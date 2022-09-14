
import CreatePost from "../pages/createPost"
import Editprofile from "../pages/user/index"

const UserRoutes = [
  { path: 'profile', element: <Editprofile /> },  
  { path: 'post', element: <CreatePost /> },  

]

export default UserRoutes