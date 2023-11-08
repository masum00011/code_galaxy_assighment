import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './Pages/afterAuth/Home/Home';
import Login from './Pages/beforeAuth/Login';
import CreateUser from './Pages/afterAuth/CreateUser/CreateUser';
import Createleads from './Pages/afterAuth/createLeads/Createleads';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/create-user",
    element:  <CreateUser/>,
  },
  {
    path: "/create-leads",
    element:  <Createleads/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);