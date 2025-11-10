import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Otp = () => {
  let params=useParams()
    let navigate=useNavigate()
  // console.log(params.email);
  // console.log(params.otpcode);


  useEffect(()=>{

   async function sendData(){
      let data= await axios.post("http://localhost:8000/api/v1/authentication/otp",{
      email:params.email,
      otp:params.otpcode

     })
     if(data.data=="otp match"){
      navigate('/login')

     }else{
      toast.error("Your verification expiare");
     }

    }
    sendData()

  },[])

  return (
    <>
    <h1>Please wait for Verifiy......</h1>
    <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            
          />
    </>
  )
}

export default Otp