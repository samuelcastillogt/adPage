"use client"
import React, { useState } from "react"
import GenericLinkButton from "./GenericLinkButton"
import { useSelector } from "react-redux"
import UpButton from "./UpButton"
import {departamentos} from "../../utils/departamentosGt"
import { Link } from "next/link"
const AdsFiltered = (props)=>{
    const {data, subCategororia} = props
    const state = useSelector(state => state.departamento)
    return(
        <div className="flex justify-center w-full flex-col">
         <div className="h-80 bg-gray-500">Banner 2</div>
        <div className="h-24 bg-black"></div>
        <div className="h-14 my-5 bg-black flex justify-around items-center">
          <div className="flex ">
            <select name="" id="" value={state.departamento}>
                {
                    departamentos.map(item => <option value={item} key={item}>{item}</option>)
                }
            </select>
            <p className="text-white">{subCategororia}</p>
          </div>
          <GenericLinkButton to="/login" title="Mi Cuenta" />
          
        </div>
        <div className="flex flex-col justify-center items-center">
            {
              data && data.length == 0 && <h2>No hay nada que mostrar</h2>
            }
        {
              data && data.length > 0 &&   <table className="s-full">
              <thead>
                <tr>
                <th className='m-5'>Fecha de Publicacion</th>
                <th className='m-5'>Titulo del Anuncio</th>
                <th className='m-5'>Lugar</th>
                <th className='m-5'>Adjunta</th>
                </tr>
                <tr>
                    <td>
                        </td>      
                </tr>
              </thead>
              <tbody>
               
                {
                    data && data.map(item =>{
                        if(item.data.adType == "premium"){
    return(          
                         <tr key={item.id}>
                            <Link href={"/detalles/" + item.id}>
                            <td className='m-5'>{item.data.created}</td>
                            <td className='m-5'>{item.data.titulo}</td>
                            <td className='m-5'>{item.data.departamento}</td>
                           </Link> 
                </tr>
    
                        )
                        }else return
                        
                    })
                }
                <p className='font-bold my-5'>Anuncios Relacionados</p>
                {
                    data &&  data.map(item =>{
                        if(item.data.adType == "free"){
    return(
                          <tr key={item.id}>
                            <Link href={"/detalles/" + item.id}>
                            <td className='m-5'>{item.data.created}</td>
                            <td className='m-5'>{item.data.titulo}</td>
                            <td className='m-5'>{item.data.departamento}</td>
                           </Link> 
                </tr>  
                        )
                        }else return
                        
                    })
                }
              </tbody>
            </table> 
            } 
        </div>
       
                    <UpButton />
        </div>
        
    )
}
export default AdsFiltered