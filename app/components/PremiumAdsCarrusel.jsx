import { categorias } from '@/utils/categorias';
import React from 'react';

const PremiumAdsCarrusel = () => {
    return (
        <>
        <tr className='bg-black m-5 h-20 flex justify-center items-center snap-x'>

            {
                categorias && categorias.map((item, index)=>  <th key={index} className='bg-[#FEAE00] text-xs my-1 mx-1 flex justify-center items-center h-16 w-52'>{item}</th>
                )
            }
        </tr>
        <tr className=' m-5 divide-x divide-gray-400 flex justify-center items-center snap-x'>
            <td className='text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
        </tr>
        <tr className=' m-5 divide-x divide-gray-400 flex justify-center items-center snap-x'>
            <td className='text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
        </tr>
        <tr className=' m-5 divide-x flex divide-gray-400 justify-center items-center snap-x'>
            <td className='text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
        </tr>
        <tr className=' m-5 divide-x flex divide-gray-400 justify-center items-center snap-x'>
            <td className='text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
        </tr>
        <tr className=' m-5 divide-x flex divide-gray-400 justify-center items-center snap-x'>
            <td className='text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
            <td className=' text-xs  mx-1 flex justify-center items-center  w-52'>Subcategoria</td>
        </tr>
        </>
        
    );
};

export default PremiumAdsCarrusel;