import { Button, Label, Radio, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {set, z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios'
import { RegistritionScehma } from '../../Schemas/AuthSchemas';
import AppAlert from '../../components/AppAlert/AppAlert';
import {useNavigate} from 'react-router-dom'


export default function Register() {

  const [msg , setMsg] = useState()
  const navigate = useNavigate()
  const [loadingBtn , setLoadingBtn] = useState(false)
  const {register,handleSubmit,formState: { errors }} = useForm(
    {
         mode:'onsubmit',
      resolver : zodResolver(RegistritionScehma),
      defaultValues:{
        name:'',
        email:'',
        password:'',
        rePassword:'',
        dateOfBirth:"",
        gender :""
      },
    }
  )
 

 async function onSubmit(data) {
    console.log("Data being sent:", data); 
     setLoadingBtn(true)
    try {
     
      const response = await axios.post("https://linked-posts.routemisr.com/users/signup", data);
      
      console.log("Success Response:", response);
   
      if (response.data.message === "success") {
       // alert("Account Created Successfully!");
        setMsg(response.data.message)
        navigate('/Login')
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
          <Label htmlFor="name">Your name</Label>
        </div>
        <TextInput {... register('name')} id="name" type="text" placeholder="Your name" className='mb-5'  />
      </div>
      {errors.name && <AppAlert color = {'failure'} content = {errors.name.message}/>}


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

       <div>
        <div className="mb-2 block">
          <Label htmlFor="rePassword">Confirm password</Label>
        </div>


        <TextInput {... register('rePassword')} id="repassword" type="text" placeholder="Your password" className='mb-5' />
      </div>
      {errors.rePassword && <AppAlert color = {'failure'} content = {errors.rePassword.message}/>}


       <div>
        <div className="mb-2 block">
          <Label htmlFor="dob">Date Of Birth</Label>
        </div>
        <TextInput {... register('dateOfBirth')} 
        id="dob" type="date" placeholder="Your date of birth" className='mb-5' />
      </div>
{errors.dateOfBirth && <AppAlert color = {'failure'} content = {errors.dateOfBirth.message}/>}


<div className="flex max-w-md flex-col gap-4">
      <div className="flex items-center gap-2">
        <Radio id="male" {... register('gender')}  value="male" defaultChecked />
        <Label htmlFor="male">male</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="female" {... register('gender')} value="female" />
        <Label htmlFor="female">female</Label>
      </div>
      </div>


      <Button type="submit">
       
    {loadingBtn ? <><Spinner className='me-2' aria-label="Default status example" /> looding...</>: 'submit'}
      </Button>
     { msg &&< AppAlert color = {msg=== 'success' ? 'success' : 'failure' } content = {msg}/>}
   </div>
   
 </form>
  )
}








/*import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import {useForm} from 'react-hook-form'
import { zodResolver } from './../../../node_modules/@hookform/resolvers/zod/src/zod';
import { axios } from './../../../node_modules/axios/dist/esm/axios';
import axios from './../../../node_modules/axios/lib/axios';
import { Axios } from './../../../node_modules/axios/index.d';
import AppAlert from './../../components/AppAlert/AppAlert';


export default function Register() {


  const {register,handleSubmit,formState: { errors } ,formState , getValues} = useForm(
    {
      defaultValues:{
        name:'',
        email:'',
        password:'',
        rePassword:'',
        dateOfBirth:'',
        gender :''
      },
      mode:'onsubmit'
    
    }
  )
  console.log(register());

  function onSubmit(data){
    console.log(data);
  }

  return (
 <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div className="container mx-auto my-10 max-w-md bg-amber-800">
     <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Your name</Label>
        </div>
        <TextInput {... register('name',
          {required:{value:true,message:'Name is required'},
          minLength:{value:3,message:'Name must be at least 3 characters'},
          maxLength:{value:20,message:'Name must be less than 20 characters'},
          pattern:{value:/^[A-Za-z\s]+$/,message:'Name must contain only letters and spaces'}
        }
        )} id="name" type="text" placeholder="Your name" className='mb-5'  />
        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
        {errors.name && formState.touchedFields.name && <p className='text-red-600'>{errors.name.message}</p>}
      </div>
      


      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        <TextInput {... register('email',
          {
            required:{value:true,message:'Email is required'},
            pattern:{value:/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,message:'Invalid email address'}

          }
        )} id="email1" type="email" placeholder="name@flowbite.com"className='mb-5' />
      </div>
       {errors.email&& <p className='text-red-600'>{errors.email.message}</p>}


        <div>
        <div className="mb-2 block">
          <Label htmlFor="password">Your password</Label>
        </div>
        <TextInput {... register('password',
          {
            required:{value:true,message:'Password is required'},
            minLength:{value:6,message:'Password must be at least 6 characters'},
            pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,message:'Password must contain at least one letter, one number and one special character'}

          }
        )} id="password" type="text" placeholder="Your password" className='mb-5'/>
      </div>
      {errors.password && <p className='text-red-600'>{errors.password.message}</p>}


       <div>
        <div className="mb-2 block">
          <Label htmlFor="rePassword">Confirm password</Label>
        </div>
        <TextInput {... register('rePassword',
          {
            required:{value:true,message:'Confirm Password is required'},
            //validate:(value,formValues)=> value === formValues.password || 'Passwords do not match'
            validate:(value)=> value === getValues('password') || 'Passwords do not match'
          }
        )} id="repassword" type="text" placeholder="Your password" className='mb-5' />
      </div>
      {errors.rePassword && <p className='text-red-600'>{errors.rePassword.message}</p>}


       <div>
        <div className="mb-2 block">
          <Label htmlFor="dob">Date Of Birth</Label>
        </div>
        <TextInput {... register('dateOfBirth',{
          required:{value:true,message:'Date of birth is required'},
          //valueAsDate:true ,
          
          validate:(value)=>{
            const today = new Date();
            const dob = new Date(value);//selected date of birth
            let age = today.getFullYear() /*current year*//*- dob.getFullYear() /*selected year*/;
            /*const monthDiff = today.getMonth() /*current month*/// - dob.getMonth() /*selected month*/;
            /*console.log(age);
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate()  /*current day*/ //< dob.getDate()))
               /*selected day*///{
             /* age--;
            }
            console.log(age);
            console.log(dob.getDate());
            console.log(today.getDate());
            console.log(monthDiff);

            return age >= 13 || 'You must be at least 13 years old to register';
          }
          // validate: (value) => {new Date().getFullYear() - new Date(value).getFullYear() >= 13 || 'You must be at least 13 years old to register';
         // validate: (value) => {new Date(value)< new Date() || 'data of birth must be in the past';
        })} 
        id="dob" type="date" placeholder="Your date of birth" className='mb-5' />
      </div>
{errors.dateOfBirth && <p className='text-red-600'>{errors.dateOfBirth.message}</p>}


<div className='mt-3 flex items-center'>
  <label htmlFor="female">female:</label>
  <input className='ms-2' type="radio" name="gender" id="female" value="female" {... register('gender',
    {
      required:{value:true,message:'Gender is required'
      }
    }
  )} />
</div>


<div className='mt-3 flex items-center'>
  <label htmlFor="male">male:</label>
  <input className='ms-2' type="radio" name="gender" id="male" value="male" {... register('gender')} />
</div>
{errors.gender&& <p className='text-red-600'>{errors.gender.message}</p>}
      <Button type="submit">submit</Button>
   </div>
   
 </form>
  )
}
  */
