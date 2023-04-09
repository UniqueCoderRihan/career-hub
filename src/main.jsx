import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nabvar from './Components/Nabvar/Nabvar';
import Header from './Components/Header/Header';
import Statistic from './Components/Statistic/Statistic';
import Applied from './Components/Applied/Applied';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path: '/',
        element: <Statistic></Statistic>
      },
      {
        path: '/applied',
        element: <Applied></Applied>
      },

      {
        path: '/blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
