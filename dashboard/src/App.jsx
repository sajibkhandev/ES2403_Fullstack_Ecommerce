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
import ForgetPassword from './pages/forgetPassword';
import ChangePassword from './pages/changePassword';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Registration />}></Route>
    <Route path="/otp/:email/:otpcode" element={<Otp />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/forgetpassword" element={<ForgetPassword/>}></Route>
    <Route path="/changepassword/:email" element={<ChangePassword/>}></Route>
    </>
  )
);


const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App