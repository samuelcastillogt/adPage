"use client"
import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation'
import { authService } from '../../services/auth.service';
import { useAppSelector } from '@/redux/hooks';
const LoginForm = () => {
  const isLogin = useAppSelector(state=> state.counterReducer.value)
  const [username, setUserName] = useState("")
  const [email, setemail] = useState("")
  const [pass, setPass] = useState("")
  const [errorPass, setErrorPass] = useState()
  const [login, setLogin] = useState(false)
  const auth = async()=>{
    authService.createUser(username, email, pass)
  }
  const inicio = async()=>{
    authService.loginEmailPass(email, pass)
  }
  useEffect(()=>{
    console.log(isLogin)
    if(isLogin != undefined){
      redirect("/dashboard")
    }
  },[isLogin])
    return (
        <div className='h-96 flex flex-col justify-center items-center m-12 p-5'>
          {
            login ? <>
            <p className='font-bold text-3xl'>Crea una cuenta</p> 
          {/* <div className="btn bg-[#FEAE00] rounded-full text-center  w-72 p-5 cursor-pointer" onClick={auth}>
            <p className='font-bold'>Crear una cuenta con Google <ImGoogle3 style={{margin: 0, display: "inline"}} /></p> */}
            <label htmlFor="">Nombre de Usuario</label>
            <input type="text" className='border border-[#FEAE00] rounded p-2 ' onChange={(e)=> setUserName(e.currentTarget.value)}/>
            <label htmlFor="">Correo Electronico</label>
            <input type="email" className='border border-[#FEAE00] rounded p-2 ' onChange={(e)=> setemail(e.currentTarget.value)}/>
            <label htmlFor="">Contraseña</label>
            <input type="password" className='border border-[#FEAE00] rounded p-2 ' onChange={(e)=> setPass(e.currentTarget.value)}/>
            <label htmlFor="">Confirmar Contraseña</label>
            <input type="password" className='border border-[#FEAE00] rounded p-2 ' onChange={(e)=>{
              if(e.currentTarget.value != pass){
                e.currentTarget.classList.add("bg-red-700")
              }else{
                e.currentTarget.classList.remove("bg-red-700")
              }
            }}/>
            <button className='bg-[#FEAE00] p-3 m-5 rounded' onClick={auth} disabled={email.length <= 3 || pass.length <= 3 || username.length <= 3}>Crear la cuenta</button>
            {/* </div>   */}
            <p onClick={()=> setLogin(false)} className='cursor-pointer my-5 hover:text-red-600'>Ya tengo una cuenta</p>
                    </> :

<>
<p className="font-bold text-3xl">Iniciar Sesion</p> 
<label htmlFor="">Correo Electronico</label>
            <input type="email" className='border border-[#FEAE00] rounded p-2' onChange={(e)=> setemail(e.currentTarget.value)}/>
            <label htmlFor="">Contraseña</label>
            <input type="password" className='border border-[#FEAE00] rounded p-2' onChange={(e)=> setPass(e.currentTarget.value)}/>
            <button className='bg-[#FEAE00] p-3 m-5 rounded' onClick={inicio}>Iniciar Sesion</button>
            <p onClick={()=> setLogin(true)} className='cursor-pointer my-5 hover:text-red-600'>No tienes una cuenta? Crea una gratis</p>
{/* <div className="btn bg-[#FEAE00] rounded-full text-center  w-72 p-5 cursor-pointer" onClick={auth}>
<p className='font-bold'>Iniciar Sesion con Google <ImGoogle3 style={{margin: 0, display: "inline"}}/></p>
</div>   */}
       </>
          }
         
        </div>
    );
};

export default LoginForm;