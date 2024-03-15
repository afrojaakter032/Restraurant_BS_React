import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import FoodMenuList from './pages/FoodMenuList/FoodMenuList.jsx'
import NoticeList from './pages/NoticeList/NoticeList.jsx'
import NoticeDetails from './pages/NoticeDetails/NoticeDetails.jsx'
import FoodMenuDetails from './pages/FoodMenuDetails/FoodMenuDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/food-menu-list/:slug",
    element: <FoodMenuList />,
  },
  {
    path: "/notice-list",
    element: <NoticeList />,
  },
  {
    path: "/notice-details",
    element: <NoticeDetails />,
  },
  {
    path: "/food-menu-details",
    element: <FoodMenuDetails />,
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
