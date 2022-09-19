import HomeLayout from "../layout/home"
import UserLayout from "../layout/user"
import HomeRoutes from './home'
import RequireAuth from './guard/user'
// import CreatePost from "../pages/createPost"
import UserRoutes from "./user"

const DefaultRoutes = [
  { path: '/', element:<HomeLayout/>, children: [...HomeRoutes] },
   { path: '/user/dashboard', element: <RequireAuth element={UserLayout} />, children: [...UserRoutes] },
  // { path: '/admin/', element: <RequireAuth element={CreatePost} />, children: [...AdminRoutes] },
 
]

export default DefaultRoutes