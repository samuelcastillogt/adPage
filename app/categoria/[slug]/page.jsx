import GenericLinkButton from '@/app/components/GenericLinkButton';
import UpButton from '@/app/components/UpButton';
import { serviceData } from '@/services/data.service';
import Link from 'next/link';
import React from 'react';

const page = async({params}) => {
    const {slug} = params
    const data = await serviceData.getAdsByDept("Chimaltenango")
    console.log(data)
    return (
      <div>
        <div className="h-80 bg-gray-500">Banner</div>
        <div className="h-24 bg-black"></div>
        <div className="h-14 my-5 bg-black flex justify-around items-center">
          <div>
            <p className="text-[#FEAE00]">
              Lugar seleccionado / Categoria seleccionada / Subcategoria
              seleccionada{" "}
            </p>
          </div>
          <GenericLinkButton to="/login" title="Mi Cuenta" />
        </div>
        <div className="flex justify-center w-full">
           <table className="s-full">
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
                     <tr>
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
                data && data.map(item =>{
                    if(item.data.adType == "free"){
return(
                      <tr>
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
        </div>
        <UpButton />
      </div>
    );
};

export default page;