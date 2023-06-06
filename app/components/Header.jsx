"use client"
import React, { useEffect } from 'react';
import GenericLinkButton from './GenericLinkButton';
import { authService } from '@/services/auth.service';
import { getAuth } from "firebase/auth";
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { increment, reset } from '@/redux/use.slice';
const auth = getAuth();
const Header = () => {
    const isLogin = useAppSelector(state=> state.counterReducer.value)
    return (
        <div className='h-36 bg-black p-6 flex flex-row w-full justify-around items-center'>
            <p className='text-[#FEAE00]'>
            Donde publicar tus anuncios es GRATIS!!!
            </p>
            <div className="flex flex-col w-64">
              <GenericLinkButton to="login" title={isLogin == 0 | isLogin == undefined ? "Iniciar Sesion" : "Mi Cuenta"} />
            <GenericLinkButton to="/dashboard/adcreactor" title="Publicar un anuncio" />  
            </div>
            
        </div>
    );
};

export default Header;