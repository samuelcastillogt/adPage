"use client"
import React, { useEffect } from 'react';
import GenericLinkButton from './GenericLinkButton';
import { authService } from '@/services/auth.service';
import { getAuth } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
const auth = getAuth();
const Header = () => {
    const isLogin = useAppSelector(state=> state.counterReducer.value)
    return (
        <div className='h-36 bg-black p-6 flex flex-row w-full justify-around items-center'>
            <Link href="/">
              <div className="flex flex-col">
               <img src="https://firebasestorage.googleapis.com/v0/b/asistente-ce26f.appspot.com/o/logo.png?alt=media&token=db569225-4b3c-4944-8de7-eeb2f0bad5e9" className='w-28'/>
            <p className='text-[#FEAE00]'>
            Donde publicar tus anuncios es GRATIS!!!
            </p> 
            </div>  
            </Link>
                window.location.pathname == "/" &&
                <div className="flex flex-col w-64">
              <GenericLinkButton to="login" title={isLogin == 0 | isLogin == undefined ? "Iniciar Sesion" : "Mi Cuenta"} />
            <GenericLinkButton to="/dashboard/adcreactor" title="Publicar un anuncio" />  
            </div>
            
            
            
        </div>
    );
};

export default Header;