"use client"
import React, { useState } from 'react';
import { serviceData } from '@/services/data.service';
import Link from 'next/link';
const page = () => {
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [anuncio, setAnuncio] = useState()
    const [error, setError] = useState(false)
    const saveData = async()=>{
        setError(false)
        if(titulo.length <= 3) setError("Debe ingresar un titulo valido")
        if(descripcion.length <= 3) setError("Debe ingresar una descripcion valida")
        if(precio.length <= 3) setError("Debe ingresar un precio valida")
        try{
            if(error != false){
             return
            }else{
                console.log("dentro")
                const response = await serviceData.saveAdData({
                    titulo,
                    descripcion,
                    precio
                })
                setTitulo("")
                setPrecio("")
                setDescripcion("")
                setAnuncio(response)   
                }
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <input type="text" value={titulo} onChange={(e)=>setTitulo(e.target.value)} placeholder='Titulo del anuncio' className='border-yellow-700 w-80 border rounded m-5'/>
                <textarea value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} className='border-yellow-700 w-80 border rounded m-5' placeholder='Descripcion'></textarea>
                <input type="text" value={precio} onChange={(e)=>setPrecio(e.target.value)} placeholder='Precio' className='border-yellow-700 w-80 border rounded m-5'/>
                <button onClick={saveData} className={titulo.length == 0 || descripcion.length == 0 || precio.length == 0 ? "bg-yellow-300 p-3 rounded-xl" : "bg-yellow-700 p-3 rounded-xl"} disabled={titulo.length == 0 || descripcion.length == 0 || precio.length == 0}>Crear anuncio</button>
            </div>
            {
                error != false && error
            }
            {
                anuncio && <>
                <Link href={"/detalles/" + anuncio} className="bg-yellow-700">Ver anuncio publicado</Link>
                </>
            }
        </div>
    );
};

export default page;