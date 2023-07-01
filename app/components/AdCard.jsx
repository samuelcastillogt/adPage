import React from "react";
import  Link  from "next/link"
import {AiFillEye} from "react-icons/ai"
const AdCard = (props)=>{
    const {data, id} = props
    return(
        <div className={"border p-5 rounded flex flex-nowrap items-center m-5 w-96"}>
            <p className="font-bold text-2xl mx-5">{data.titulo}</p>
            <p className="text-xs">Publicado: {data.created}</p>
            <p >{data.adType == "premiun" && "Destacado"}</p>
            <Link href={"/detalles/" + id} className="text-2xl text-yellow-900 ">
            <div className="flex flex-col justify-center items-center mx-5">
               <AiFillEye /> 
                <p className="text-xs">Ver detalles</p>
            </div>
            </Link>
        </div>
    )
}
export default AdCard