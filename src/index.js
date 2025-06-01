import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Aboutus from './pages/Aboutus';
import Total from './pages/Total';
import Schemes from './pages/Schemes';
import Schloarship from './pages/Schloarship';
import Knowmore from './pages/Knowmore';
import { SearchProvider, useSearch } from './Context/Searchcontext';






const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'header',
    element: <Header />,
  },
  {
    path: 'about-us',
    element: <Aboutus />
  },
  {
    path: 'total',
    element: <Total />
  },
  {
    path: 'schemes',
    element: <Schemes />
  },
  {
    path: 'Schloarship',
    element: <Schloarship />
  },
  {
    path: 'knowmore',
    element: <Knowmore />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </React.StrictMode>
);

reportWebVitals();
