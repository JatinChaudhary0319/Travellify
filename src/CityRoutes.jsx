import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainHome from './Components/MainHome';
// import NewYork from './Components/NewYork';
// import AppStore from './Components/AppStore';
import RootLayout from './Layout/RootLayout';
import CityRootLayout from './Layout/CityRootLayout';
import CityDetail from './Components/CityDetail';
import AppStore from './Components/AppStore';

const rout = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        // id: 'root',
        element: <MainHome />
      },
      {
        path: '/cities',
        element: <CityRootLayout />,
        children: [
          {
            index: true,
            element: <MainHome />
          },
          {
            path: ':cityName',
            // id: 'city-detail',
            element: <CityDetail />
          },
        ]
      },
      {
        path: '/app',
        // id: 'root',
        element: <AppStore />
      },
    ]
  },
])

export default function CityRoutes() {
  return (
    <RouterProvider router={rout}></RouterProvider>
  );
};
