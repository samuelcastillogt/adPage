import Link from 'next/link';
import React from 'react';
import GenericLinkButton from '../components/GenericLinkButton';
import { serviceData } from '@/services/data.service';
import {AiFillDelete} from "react-icons/ai"

const page = async() => {
  const ads = await serviceData.getAllAds()
  console.log("list",ads)
    return (
        <div>
          <div className='bg-black h-24 flex justify-end m-5 p-5'>
            <GenericLinkButton title="Publicar un nuevo anuncio" to="/dashboard/adcreactor" className="h-12"/>
          </div>
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
                ads.map((item, index)=> <tr className='divide-y divide-gray-400 table-auto border-spacing-x-1.5 w-full border-b-2 border-gray-300 p-5' key={item.id}>
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
};

export default page;