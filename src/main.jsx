import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContactsApp } from './04-useContext/ContactsApp';

import './css/styles.css'

// import { CounterApp } from './01-useState/CounterApp';
// import { CounterAppWithHook } from './01-useState/CounterAppWithHook';
// import { BrakingBadQuotes } from './02-useEffect/BrakingBadQuotes';

import {
  
  createBrowserRouter,
  RouterProvider,
  Route,

} from 'react-router-dom';
import { Root } from './04-useContext/screens/Root';
import ErrorPage from './04-useContext/screens/ErrorPage';
import { Contact } from './04-useContext/screens/Contact';
import { CreateContact } from './04-useContext/screens/CreateContact';

const router = createBrowserRouter([
  {
    path: '/',
    element : <Root />,
    errorElement : <ErrorPage />,
    children: [
      {
        path: '/contacts/:contactId',
        element: <Contact />
      },
      {
        path: '/createContact',
        element: <CreateContact />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <React.StrictMode>
      <RouterProvider router={ router } />
  // </React.StrictMode>
  
)
