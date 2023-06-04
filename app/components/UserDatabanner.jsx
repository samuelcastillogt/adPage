"use client"
import React, {useEffect} from 'react';
import { useAppSelector } from '@/redux/hooks';
import { redirect } from 'next/navigation'
import GenericLinkButton from './GenericLinkButton';
const UserDatabanner = () => {
    const user = useAppSelector(state=> state.counterReducer.value)
    useEffect(()=>{

        if(user == undefined){
          redirect("/login")
        }
      },[user])
    return (
        <div className=' flex justify-center items-center'>
            <GenericLinkButton title="Publicar un nuevo anuncio" to="/dashboard/adcreactor" className="h-12"/>
        </div>
    );
};

export default UserDatabanner;