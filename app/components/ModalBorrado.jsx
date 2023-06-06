"use client"
import { serviceData } from '@/services/data.service';
import { useAppSelector } from '@/redux/hooks';
import React from 'react';

const ModalBorrado = (props) => {
    const user = useAppSelector(state=> state.counterReducer.value)
    return (
        <div className='z-50 border border-black p-5 flex flex-col justify-center items-center absolute bottom-0 top-0 bg-white'>
            Desea eliminar el anuncio:
            {props.ads}
            <div>
            <button className='bg-red-700 rounded-lg p-3 m-5'  onClick={async()=> {
                try{
                 await serviceData.deleteAd(props.ads)
                props.cancel()
                if(user){
                   props.getData(user.uid) 
                }else{
                    return
                }   
                }catch(err){
                    console.log(err)
                }
                
                
                }}>Eliminar</button>
            <button className='border border-gray-500 rounded-lg p-3 m-5' onClick={()=> props.cancel()}>Cancelar</button>                
            </div>

        </div>
    );
};

export default ModalBorrado;