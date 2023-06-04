"use client"
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/hooks';
import { serviceData } from '@/services/data.service';
import {AiFillDelete} from "react-icons/ai"
const TableAds = () => {
    const user = useAppSelector(state=> state.counterReducer.value)
    const [ads, setAds] = useState()
    const getData = async(id)=>{
        const data = await serviceData.getAdsByAutor(id)
        setAds(data)
    }
    useEffect(()=>{
        if(user != undefined){
            getData(user.uid)
        }
    },[user])
    if(user == undefined){
        return <h2>Cargando ...</h2>
    }else{
        return (
        <div className='m-5 flex items-center justify-center'>
                      <div className='m-5 flex items-center justify-center'>
            <table className='table-auto border-spacing-x-1.5'>
              <tr>
                <th className='mx-5 w-24'>Titulo</th>
                <th className='mx-5 w-24'>Estatus</th>
                <th className='mx-5 w-24'>Accion</th>
                <th className='mx-5 w-24'>Categoria</th>
                <th className='mx-5 w-24'>Fecha de publicacion</th>
                <th className='mx-5 w-24'>fecha de exp.</th>
                <th className='mx-5 w-24'>Numero</th>
              </tr>
      {
                ads && ads.map((item, index)=> <tr className='divide-y divide-gray-400 table-auto border-spacing-x-1.5 w-full border-b-2 border-gray-300 p-5' key={item.id}>
                  <td className='divide-y text-center divide-gray-400 p-5'>{item.data.titulo}</td>
                  <td className='divide-y text-center divide-gray-400'>Activo</td>
                  <td><AiFillDelete className="text-red-500 text-center"/></td>
                  <td><AiFillDelete className="text-red-500 text-center"/></td>
                  <td><AiFillDelete className="text-red-500 text-center"/></td>
                  <td><AiFillDelete className="text-red-500 text-center"/></td>
                  <td>{item.id}</td>
                  </tr>)
              }
            </table>
            
          </div>

        </div>
    ); 
    }
   
};

export default TableAds;