"use client"
import React, { useState } from 'react';
import Header from '../components/Header';
import {ImGoogle3} from "react-icons/im"
const page = () => {
    const [login, setLogin] = useState(true)
    return (
        <>
          <Header />
          {
            login ? <>
             Crea una cuenta
          <div className="btn bg-yellow-700 rounded-full text-center text-white w-6/12 p-5">
            <p>Crear una cuenta con Google <ImGoogle3 style={{margin: 0, display: "inline"}}/></p>
            </div>  
            <p onClick={()=> setLogin(false)}>Ya tengo una cuenta</p>
                    </> :

<>
Iniciar Sesion
<div className="btn bg-yellow-700 rounded-full text-center text-white w-6/12 p-5">
<p>Iniciar Sesion con Google <ImGoogle3 style={{margin: 0, display: "inline"}}/></p>
</div>  
       </>
          }
         
        </>
    );
};

export default page;