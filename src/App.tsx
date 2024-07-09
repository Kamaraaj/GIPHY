
// homepage
// catagories
// search
// singe gif
// favorites

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Search from "./pages/Search"
import GifPage from "./pages/GifPage"
import Favorites from "./pages/Favorites"

const router = createBrowserRouter([{
  element:<AppLayout/>,
  children:[{
    path:'/',
    element:<Home/>
  },{
    path:'/:category',
    element:<Categories/>
  },{
    path:'/search/query',
    element:<Search/>
  },{
    path:'/:type/:slug',
    element:<GifPage/>
  },{
    path:'/favorites',
    element:<Favorites/>
  }]
}])

const App =()=> {

  return <RouterProvider router={router} />
}

export default App