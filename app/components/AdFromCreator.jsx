"use client"
import React, { useState } from 'react';
import { serviceData } from '@/services/data.service';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';
import GenericLinkButton from './GenericLinkButton';
import { categorias } from '@/utils/categorias';
import moment from 'moment';
import { storageService } from '@/services/storage.service';
const AdFormCreator = () => {
    const user = useAppSelector(state=> state.counterReducer.value)
    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState("")
    const [anuncio, setAnuncio] = useState()
    const [categoria, setCategoria] = useState(categorias[0])
    const [image, setImage] = useState()
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
                    precio,
                    autor: user ? user.uid : "anonimo",
                    created: new moment().format("DD/MM/YYYY"),
                    desactivated: moment().add(60, "days").format("DD/MM/YYYY"),
                    categoria,
                    estatus: 1,
                    image

                })
                setTitulo("")
                setPrecio("")
                setDescripcion("")
                setCategoria("")
                setAnuncio(response)   
                }
        }catch(err){
            console.log(err)
        }
    }
    
    return (
        <div className='my-5 flex flex-col justify-center items-center'>
            <div className="flex flex-col justify-center items-center">
                {
                    image && <img src={image} alt="" />
                }
                
                <input type="file" name="" id="" onChange={async(e)=>{
                    const upload = await storageService.uploadFile(e.currentTarget.files[0])
                    setImage(upload)
                }}/>
                <input type="text" value={titulo} onChange={(e)=>setTitulo(e.target.value)} placeholder='Titulo del anuncio' className='border-yellow-700 w-80 border rounded m-5 p-3'/>
                <textarea value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} className='border-yellow-700 w-80 border rounded m-5 p-3' placeholder='Descripcion'></textarea>
                <select name="" id="" className='border border-yellow-700 p-4 rounded' onChange={(e)=>{
                    setCategoria(e.currentTarget.value)
                }}>
                    {
                        categorias.map((item)=> <option key={item} value={item}>{item}</option>)
                    }
                </select>
                <input type="text" value={precio} onChange={(e)=>setPrecio(e.target.value)} placeholder='Precio' className='border-yellow-700 w-80 border rounded m-5 p-3'/>
                <button onClick={saveData} className={titulo.length == 0 || descripcion.length == 0 || precio.length == 0 || image == undefined ? "bg-yellow-300 p-3 rounded-xl blur-sm text-white" : "bg-[#FEAE00] p-3 rounded-xl"} disabled={titulo.length == 0 || descripcion.length == 0 || precio.length == 0}>Crear anuncio</button>
            </div>
            {
                error != false && error
            }
            {
                anuncio && <div className='flex'>
                <GenericLinkButton to={"/detalles/" + anuncio} title="Ver anuncio publicado"/>
                {user && user.uid && <GenericLinkButton to={"/dashboard"} title="Regresar"/>}
                </div>
            }
        </div>
    );
};

export default AdFormCreator;