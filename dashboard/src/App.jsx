import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/Registration';
import Otp from './pages/Otp';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Registration />}></Route>
    <Route path="/otp/:email/:otpcode" element={<Otp />}></Route>
    <Route path="/login" element={<Login />}></Route>
    </>
  )
);


const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App