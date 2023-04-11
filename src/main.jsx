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
import Details from './Components/Details/Details';
import Chat from './Components/Chat/Chat';
import ErrorPage from './Components/Error/ErrorPage';
// import AppliedDetail from './Components/Applied/AppliedDetail';
import Onsite from './Components/Onsite/Onsite';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Statistic></Statistic>,
        loader:()=>fetch('jobs.json')
        
      },
      {
        path: '/statistic',
        element: <Chat></Chat>,
        
      },
      {
        path: '/applied',
        element: <Applied></Applied>,
        loader: ()=> fetch('feautures.json')

      },
      {
        path:'/onsite',
        element:<Onsite></Onsite>,
        loader: ()=> fetch('feautures.json')
      },
      {
        path: '/:id',
        element: <Details></Details>,
        loader: ()=> fetch('feautures.json')
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
