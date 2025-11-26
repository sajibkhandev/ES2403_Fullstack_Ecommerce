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
import Home from './pages/Home';
import ViewCategory from './pages/ViewCategory';
import AddCategory from './pages/AddCategory';
import AddSubCategory from './pages/AddSubCategory';
import ViewSubCategory from './pages/ViewSubCategory';
import AddProduct from './pages/AddProduct';
import ViewProduct from './pages/ViewProduct';
import AddVeriant from './pages/AddVeriant';
import ViewVeriant from './pages/ViewVeriant';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Registration />}></Route>
    <Route path="/otp/:email/:otpcode" element={<Otp />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/forgetpassword" element={<ForgetPassword/>}></Route>
    <Route path="/changepassword/:email" element={<ChangePassword/>}></Route>
    <Route path="/dashboard" element={<Home/>}>
        <Route path="addcategory" element={<AddCategory/>}></Route>
        <Route path="viewcategory" element={<ViewCategory/>}></Route>
        <Route path="addsubcategory" element={<AddSubCategory/>}></Route>
        <Route path="viewsubcategory" element={<ViewSubCategory/>}></Route>
        <Route path="addproduct" element={<AddProduct/>}></Route>
        <Route path="viewproduct" element={<ViewProduct/>}></Route>
        <Route path="addveriant" element={<AddVeriant/>}></Route>
        <Route path="viewveriant" element={<ViewVeriant/>}></Route>

    </Route>
    </>
  )
);


const App = () => {
  return (
     <RouterProvider router={router} />
  )
}

export default App