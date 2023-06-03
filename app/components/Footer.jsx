import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#FEAE00] flex flex-col justify-around items-center h-28'>
            <div className='flex justify-around w-full'>
                <Link href={"/"}>Politicas de Privacidad</Link>
                <Link href={"/"}>Terminos y condiciones</Link>
                <Link href={"/"}>Tips de seguridad</Link>
                <Link href={"/"}>Reportar abuso</Link>
            </div>
            <div>
                <p>©Todos los derechos reservados. Guatemala 2023</p>
            </div>
        </div>
    );
};

export default Footer;