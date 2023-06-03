import React from 'react';
import GenericLinkButton from './GenericLinkButton';
import { authService } from '@/services/auth.service';
import { getAuth } from "firebase/auth";
const auth = getAuth();
const Header = ({params}) => {
    const user = auth.currentUser;
    console.log(params)
    return (
        <div className='h-36 bg-black p-6 flex flex-row w-full justify-around items-center'>
            <p className='text-[#FEAE00]'>
            Donde publicar tus anuncios es GRATIS!!!
            </p>
            <div className="flex flex-col w-64">
              <GenericLinkButton to="login" title={user != null ? "Mi Cuenta" : "Iniciar Sesion"} />
            <GenericLinkButton to="#" title="Publicar un anuncio" />  
            </div>
            
        </div>
    );
};

export default Header;