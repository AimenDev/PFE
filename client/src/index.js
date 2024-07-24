import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Resident from  "./ResidentPage";
import AdminPage from  './AdminPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminLogin from './Component/AdminLogin';
import ResidentLogin from './Component/ResidentLogin';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/AdminLogin",
    element: <AdminLogin/>
  },
  {
    path: "/ResidentLogin",
    element: <ResidentLogin/>
  },
  {
    path: "/AdminPage",
    element: <AdminPage />
  },
  {
    path: "/ResidentPage",
    element: <Resident />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
