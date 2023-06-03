import React from 'react';
import GenericLinkButton from './GenericLinkButton';

const Header = () => {
    return (
        <div className='h-36 bg-black p-6 flex flex-row w-full justify-around items-center'>
            hedar
            <div className="flex flex-col w-64">
              <GenericLinkButton to="login" title="Iniciar Sesion" />
            <GenericLinkButton to="#" title="Publicar un anuncio" />  
            </div>
            
        </div>
    );
};

export default Header;