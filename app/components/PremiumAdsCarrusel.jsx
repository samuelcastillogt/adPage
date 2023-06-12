import { categorias, gigs, searchTrabajo, servicios, subInmuebles, subMascotas, trabajo, venta } from '@/utils/categorias';
import React from 'react';

const PremiumAdsCarrusel = () => {
    return (
        <table>
        <tr className='bg-black m-5 h-20 flex justify-center items-center snap-x'>

            {
                categorias && categorias.map((item, index)=>  <th key={index} className='bg-[#FEAE00] text-xs my-1 mx-1 flex justify-center items-center h-16 w-52'>{item}</th>
                )
            }
        </tr>
        <tbody className='flex'>
            <tr className=' divide-x divide-gray-400 flex flex-col justify-center items-center snap-x'>
            {
                subMascotas && subMascotas.map((item, index)=>  <td key={index} className='text-xs  mx-1 flex justify-center items-center  w-52'>{item}</td>)
            }
        </tr>
       
        <tr className=' divide-x divide-gray-400 flex flex-col justify-center items-center snap-x'>
            {
                subInmuebles && subInmuebles.map((item, index)=>  <td key={index} className='text-xs  mx-1 flex justify-center items-center  w-52'>{item}</td>)
            }
        </tr>
        <tr className=' divide-x divide-gray-400 flex flex-col justify-center items-center snap-x'>
            {
                servicios && servicios.map((item, index)=>  <td key={index} className='text-xs  mx-1 flex justify-center items-center  w-52'>{item}</td>)
            }
        </tr>
        <tr className=' divide-x divide-gray-400 flex flex-col justify-center items-center snap-x'>
            {
                trabajo && trabajo.map((item, index)=>  <td key={index} className='text-xs  mx-1 flex justify-center items-center  w-52'>{item}</td>)
            }
        </tr>
        <tr className=' divide-x divide-gray-400 flex flex-col justify-center items-center snap-x'>
            {
                venta && venta.map((item, index)=>  <td key={index} className='text-xs  mx-1 flex justify-center items-center  w-52'>{item}</td>)
            }
        </tr>
        <tr className=' divide-x divide-gray-400 flex flex-col justify-center items-center snap-x'>
            {
                gigs && gigs.map((item, index)=>  <td key={index} className='text-xs  mx-1 flex justify-center items-center  w-52'>{item}</td>)
            }
        </tr>
        <tr className=' divide-x divide-gray-400 flex flex-col justify-center items-center snap-x'>
            {
                searchTrabajo && searchTrabajo.map((item, index)=>  <td key={index} className='text-xs  mx-1 flex justify-center items-center  w-52'>{item}</td>)
            }
        </tr>
        </tbody>
      

        </table>
        
    );
};

export default PremiumAdsCarrusel;