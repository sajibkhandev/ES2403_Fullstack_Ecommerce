import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/Registration';
import Otp from './pages/Otp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Registration />}></Route>
    <Route path="/otp/:email" element={<Otp />}></Route>
    </>
  )
);


const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App