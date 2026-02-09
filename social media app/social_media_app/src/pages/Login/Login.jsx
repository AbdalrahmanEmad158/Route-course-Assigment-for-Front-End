import { Button, Label, Radio, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {set, z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios'
import { loginScehma, RegistritionScehma } from '../../Schemas/AuthSchemas';
import AppAlert from '../../components/AppAlert/AppAlert';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate()
  const [msg , setMsg] = useState()
  const [loadingBtn , setLoadingBtn] = useState(false)
  const {register,handleSubmit,formState: { errors }} = useForm(
    {
         mode:'onsubmit',
      resolver : zodResolver(loginScehma),
      defaultValues:{
        email:'',
        password:'',
      },
    }
  )
 

 async function onSubmit(data) {
    console.log("Data being sent:", data); 
     setLoadingBtn(true)
    try {
     
      const response = await axios.post("https://linked-posts.routemisr.com/users/signin", data);
      
      console.log("Success Response:", response);
   
      if (response.data.message === "success") {
       // alert("Login Successfully!");
        setMsg(response.data.message)
        localStorage.setItem('token',response.data.token)
        setTimeout(() => {
        navigate('/'); 
      }, 500);

        console.log(response.data.token)
      }
    } catch (error) {
    
      
      console.log(error.response);
     console.log(error.response.data.error);
        setMsg(error.response.data.error);
    }
    finally
    {
       setLoadingBtn(false)
    }
  }

  return (
 <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div className="container mx-auto my-10 max-w-md bg-amber-800">
    


      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput {... register('email')} id="email1" type="email" placeholder="name@flowbite.com"className='mb-5' />
      </div>
              {errors.email && <AppAlert color = {'failure'} content = {errors.email.message}/>}



        <div>
        <div className="mb-2 block">
          <Label htmlFor="password">Your password</Label>
        </div>
        <TextInput {... register('password')} id="password" type="text" placeholder="Your password" className='mb-5'/>
      </div>
         {errors.password && <AppAlert color = {'failure'} content = {errors.password.message}/>}

      <Button type="submit">
       
    {loadingBtn ? <><Spinner className='me-2' aria-label="Default status example" /> looding...</>: 'submit'}
      </Button>
     { msg &&< AppAlert color = {msg=== 'success' ? 'success' : 'failure' } content = {msg}/>}
   </div>
   
 </form>
  )
}


