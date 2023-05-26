import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routers/Router';
import { AuthProvider } from './provider/AuthProvider';
import { ApiDataProvider } from './provider/ApiDataProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiDataProvider>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </ApiDataProvider>
  </React.StrictMode>,
);