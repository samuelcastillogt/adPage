"use client"
import React from 'react';

const UpButton = () => {
    return (
        <div className='flex justify-center items-center'>
            <button onClick={()=> window.scrollTo(0,0)} className='bg-[#FEAE00] p-3 rounded-full m-2 text-center'>Ir Arriba</button>
            
        </div>
    );
};

export default UpButton;