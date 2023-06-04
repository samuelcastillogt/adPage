"use client"
import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation'
import Header from './Header';
import {ImGoogle3} from "react-icons/im"
import { authService } from '../../services/auth.service';
import { useAppSelector } from '@/redux/hooks';
const LoginForm = () => {
  const isLogin = useAppSelector(state=> state.counterReducer.value)
    const [login, setLogin] = useState(true)
    const auth = ()=>{
      authService.login()
    }
    useEffect(()=>{
      console.log(isLogin)
      if(isLogin != undefined){
        redirect("/dashboard")
      }
    },[isLogin])
    return (
        <div className='h-96 flex flex-col justify-center items-center'>
          {
            login ? <>
            <p className='font-bold text-3xl'>Crea una cuenta</p> 
          <div className="btn bg-[#FEAE00] rounded-full text-center  w-72 p-5 cursor-pointer" onClick={auth}>
            <p className='font-bold'>Crear una cuenta con Google <ImGoogle3 style={{margin: 0, display: "inline"}} /></p>
            </div>  
            <p onClick={()=> setLogin(false)} className='cursor-pointer my-5 hover:text-red-600'>Ya tengo una cuenta</p>
                    </> :

<>
<p className="font-bold text-3xl">Iniciar Sesion</p> 
<div className="btn bg-[#FEAE00] rounded-full text-center  w-72 p-5 cursor-pointer" onClick={auth}>
<p className='font-bold'>Iniciar Sesion con Google <ImGoogle3 style={{margin: 0, display: "inline"}}/></p>
</div>  
       </>
          }
         
        </div>
    );
};

export default LoginForm;