"use client"
import React, { useEffect, useState } from "react"
import GenericLinkButton from "./GenericLinkButton"
import { useSelector } from "react-redux"
import UpButton from "./UpButton"
import {departamentos} from "../../utils/departamentosGt"
import { Link } from "next/link"
import AdCard from "./AdCard"
const AdsFiltered = (props)=>{
  const state = useSelector(state => state.departamento)
    const [dataFiltered, setDataFilteres] = useState([])
    const [departamento, setDepartamento] = useState(state == undefined ? "Todo el Pais" : state.departamento)
    const {data, subCategororia, slug} = props
    useEffect(()=>{
      if(data != undefined){
        console.log(departamento)
        const newData = data.filter(item => item.data.departamento == departamento)
        console.log(newData)
        setDataFilteres(newData) 
      }
    }, [data, departamento])
    return(
        <div className="flex justify-center w-full flex-col">
         <div className="h-80 bg-[url(https://s1.eestatic.com/2021/02/06/curiosidades/mascotas/556955529_172216847_1706x960.jpg)] bg-center bg-cover bg-fixed flex justify-around items-center">Banner 2</div>
        <div className="h-24 bg-black"></div>
        <div className="h-14 my-5 bg-black flex justify-around items-center">
          <div className="flex ">
            <p className="text-white mx-5">Mostrando {slug} </p>
            <select name="" id="" className="bg-[#FEAE00] rounded" value={departamento} onChange={e => setDepartamento(e.currentTarget.value)}>
            <option value="Todo el Pais" key="Todo el Pais">Todo el Pais</option>)
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
              dataFiltered && dataFiltered.length == 0 && <h2>No hay nada que mostrar</h2>
            }
        {
              dataFiltered && dataFiltered.length > 0 &&   <table className="s-full">
              {/* <thead>
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
              </thead> */}
              <tbody>
               {
                dataFiltered && dataFiltered.map(item => <AdCard data={item.data} id={item.id} key={item.id}/>) 
               }
                {/* {
                    dataFiltered && dataFiltered.map(item =>{
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
                    dataFiltered &&  dataFiltered.map(item =>{
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
                } */}
              </tbody>
            </table> 
            } 
        </div>
       
                    <UpButton />
        </div>
        
    )
}
export default AdsFiltered