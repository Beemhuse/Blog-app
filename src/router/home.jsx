// import CreatePost from "../pages/createPost"
import Signup from "../pages/signup"
import Signin from "../pages/signin"
import HomePage from "../pages/home"
import { SinglePostPage } from "../pages/singlePostPage"
// import Dashboard from "../pages/Admin/dashboard"



const HomeRoutes = [
  { path: '/', element: <HomePage/> },
  { path: '/posts/:postId', element: <SinglePostPage/>},
  { path: '/signup', element: <Signup /> },
  { path: '/signin', element: <Signin /> },
  
]
//   { path: '/owner/dashboard', element: <OwnerDashboard />, children: [...OwnerRoutes]  },
//   { path: '/user/dashboard', element: <UserDashboard />, children:[...UserRoutes] },

export default HomeRoutes