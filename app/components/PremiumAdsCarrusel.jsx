"use client"
import { categorias, gigs, searchTrabajo, servicios, subInmuebles, subMascotas, trabajo, venta } from '@/utils/categorias';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const PremiumAdsCarrusel = () => {
    const [categoria, setCategoria]= useState(categorias[0])
    const [sub, setSub] = useState()
    useEffect(()=>{
        switch(categoria){
            case "Mascotas":
                setSub(subMascotas)
                break
            case "Inmuebles disponibles":
                setSub(subInmuebles)
                break
            case "Ofrezco mis servicios":
                setSub(servicios)
                break
            case "Ofrezco trabajo":
                setSub(trabajo)
                break
            case "Artículos a la venta":
                setSub(venta)
                break
            case "Gigs - trabajos temporales":
                setSub(gigs)
                break
            case "Busco trabajo":
                setSub(searchTrabajo)
                break
        }
    },[categoria])

    return (
        <div className='overscroll-x-auto'>
            <div className='flex flex-col items-center overscroll-x-auto bg-black justify-center m-5'>
                <p className='text-[#FEAE00] text-2xl'>Categoria</p>
                <select name="" id="" className='bg-[#FEAE00] active:bg-blue-600 text-xs p-5 flex justify-center items-center text-lg cursor-pointer m-5' onChange={(e)=> setCategoria(e.currentTarget.value)} value={categoria}>
                {
                categorias && categorias.map((item, index)=>  <option key={index} value={item}>{item}</option>
                )
            }
                </select>
            </div>  
            <div className='flex flex-wrap justify-center'>
            {
                sub && sub.map((item, index)=>  <Link  key={index} href={"/categoria/" + item} className='text-lg  m-5 flex justify-center items-center p-5 border w-52 cursor-pointer hover:bg-[#FEAE00]'>{item}</Link>)
            }
            </div>
            </div>
        
    );
};

export default PremiumAdsCarrusel;