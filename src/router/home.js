// import CreatePost from "../pages/createPost"
import Signup from "../pages/signup"
import Signin from "../pages/signin"
import HomePage from "../pages/home"
// import Dashboard from "../pages/Admin/dashboard"



const HomeRoutes = [
  { path: '/', element: <HomePage/> },
  { path: '/signup', element: <Signup /> },
  { path: '/signin', element: <Signin /> },
  // { path: '/post', element: <CreatePost /> },
  // { path: '/dashboard', element: <Dashboard /> },

  
]
//   { path: '/owner/dashboard', element: <OwnerDashboard />, children: [...OwnerRoutes]  },
//   { path: '/user/dashboard', element: <UserDashboard />, children:[...UserRoutes] },

export default HomeRoutes