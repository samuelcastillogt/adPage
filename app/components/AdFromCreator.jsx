"use client";
import React, { useEffect, useRef, useState } from "react";
import { serviceData } from "@/services/data.service";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import GenericLinkButton from "./GenericLinkButton";
import { categorias, gigs, searchTrabajo, servicios, subInmuebles, subMascotas, trabajo, venta } from '@/utils/categorias';
import moment from "moment";
import { storageService } from "@/services/storage.service";
import { Image } from "image-js";
import { departamentos } from "@/utils/departamentosGt";
const AdFormCreator = () => {
  const user = useAppSelector((state) => state.counterReducer.value);
  const free = useRef()
  const premium = useRef()
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [anuncio, setAnuncio] = useState();
  const [tel, setTel] = useState("")
  const [dir, setdir] = useState("")
  const [categoria, setCategoria] = useState(categorias[0]);
  const [departamento, setDepartamento] = useState("todos")
  const [sub, setSub] = useState()
  const [subCategoria, setSubcategoria] = useState()
  const [image, setImage] = useState();
  const [adType, setAdType] = useState()
  const [displayOn, setDisplayOn] = useState()
  const [error, setError] = useState(false);
  useEffect(()=>{
    if(categoria != undefined){
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
        case "Gigs / trabajos temporales":
            setSub(gigs)
            break
        case "Busco trabajo":
            setSub(searchTrabajo)
            break
    }
    }
   
  }, [categoria])
  const saveData = async () => {
    setError(false);
    if (titulo.length <= 3) setError("Debe ingresar un titulo valido");
    if (descripcion.length <= 3)
      setError("Debe ingresar una descripcion valida");
    if (precio.length <= 3) setError("Debe ingresar un precio valida");
    try {
      if (error != false) {
        return;
      } else {
        console.log("dentro");
        const response = await serviceData.saveAdData({
          titulo,
          descripcion,
          precio,
          autor: user ? user.uid : "anonimo",
          created: new moment().format("DD/MM/YYYY"),
          desactivated: moment().add(60, "days").format("DD/MM/YYYY"),
          categoria,
          estatus: 1,
          image,
          subCategoria,
          adType,
          tel: tel.length > 8 ? tel : "none",
          dir: dir.length == 0 ? tel : "none",
          departamento
        });
        setTitulo("");
        setPrecio("");
        setDescripcion("");
        setCategoria("");
        setAnuncio(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-wrap justify-center m-5">
        <div className="my-5 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
      <p className="font-bold m-2">Seleccione su departamento</p>
             <select
            name=""
            id=""
            className="border border-yellow-700 p-4 rounded"
            onChange={(e) => {
              setDepartamento(e.currentTarget.value)
              setDisplayOn(e.currentTarget.value);
            }}
            placeholder="Seleccione un departamento"
          >
            <option key="todos" value="todos">
                Todos los Departamentos
              </option>
            {departamentos.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        
        {
            displayOn != undefined && 
            <>
            <p className="font-bold m-2">Seleccione la categoria</p>
             <select
          name=""
          id=""
          className="border border-yellow-700 p-4 rounded"
          onChange={(e) => {
            setCategoria(e.currentTarget.value);
          }}
        >
          {categorias.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
            </>
           
        }
       {
            displayOn != undefined && 
            <>
            <p className="font-bold m-2">Seleccione la subcategoria</p>
             <select
          name=""
          id=""
          className="border border-yellow-700 p-4 rounded"
          onChange={(e) => {
            setSubcategoria(e.currentTarget.value);
          }}
        >
          { sub != undefined && sub.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
            </>
           
        }
        {(image && <img src={image} alt="" className="w-56 m-4" />) || (
            <>
            <p className="font-bold m-2">Agrege una imagen</p>
            <input
            type="file"
            name=""
            id=""
            className="file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
       file:bg-[#FEAE00]
      hover:file:bg-[#FEAE00]"
            onChange={async (e) => {
              // console.log(e.currentTarget.files[0])
              // const img = await Image.load(e.currentTarget.files[0])
              // console.log(img)
              const upload = await storageService.uploadFile(
                e.currentTarget.files[0]
              );
              setImage(upload);
            }}
          />
            </>
          
        )}
        </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Titulo del anuncio"
          className="border-yellow-700 w-80 border rounded m-5 p-3"
        />
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="border-yellow-700 w-80 border rounded m-5 p-3"
          placeholder="Descripcion"
        ></textarea>
        <input
          type="text"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder="Precio"
          className="border-yellow-700 w-80 border rounded m-5 p-3"
        />
            <input
          type="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          placeholder="Telefono (opcional)"
          className="border-yellow-700 w-80 border rounded m-5 p-3"
        />
            <input
          type="text"
          value={dir}
          onChange={(e) => setdir(e.target.value)}
          placeholder="Direccion (opcional)"
          className="border-yellow-700 w-80 border rounded m-5 p-3"
        />
        <p className="font-bold m-2">Selecciona el tipo de anuncio:  </p>
        
        <div className="flex p-5 flex-wrap">
            <div className="w-56 h-24 bg-gray-200 p-5 text-sm" ref={free} onClick={(e)=> {
            setAdType("free")
            e.currentTarget.classList.add("border")
            e.currentTarget.classList.add("border-black")
            e.currentTarget.classList.add("shadow-lg")
            e.currentTarget.classList.add("shadow-black/50")
            premium.current.classList.remove("border")
            premium.current.classList.remove("border-black")
            premium.current.classList.remove("shadow-lg")
            premium.current.classList.remove("shadow-black/50")
            
            }}>
                <p>GRATIS:</p>
                <p>Visible 20 dias renovables</p>
                <p>Maximo 1 imagen</p>
                
        </div>
           <div className="w-56 h-24 bg-green-500 p-5 text-sm" ref={premium} onClick={(e)=> {
            setAdType("premium")
            e.currentTarget.classList.add("border")
            e.currentTarget.classList.add("border-black")
            e.currentTarget.classList.add("shadow-lg")
            e.currentTarget.classList.add("shadow-black/50")
            free.current.classList.remove("border")
            free.current.classList.remove("border-black")
            free.current.classList.remove("shadow-lg")
            free.current.classList.remove("shadow-black/50")
            }}>
                <p className="font-bold">Q5</p>
                <p className="font-bold">Visible 30 dias renovables</p>
                <p className="font-bold">Maximo 15 imagenes</p>
        </div> 
        </div>
        
        <button
          onClick={saveData}
          className={
            titulo.length == 0 ||
            descripcion.length == 0 ||
            precio.length == 0 ||
            image == undefined
              ? "bg-yellow-300 p-3 rounded-xl blur-sm text-white"
              : "bg-[#FEAE00] p-3 rounded-xl"
          }
          disabled={
            titulo.length == 0 || descripcion.length == 0 || precio.length == 0 || tel.length < 8 
          }
        >
          Crear anuncio
        </button>
        {anuncio && (
        <div className="flex">
          <GenericLinkButton
            to={"/detalles/" + anuncio}
            title="Ver anuncio publicado"
          />
          {user && user.uid && (
            <GenericLinkButton to={"/dashboard"} title="Regresar" />
          )}
        </div>
      )}
      </div>
      {error != false && error}
      
      
        
    
    </div>
    
  );
};

export default AdFormCreator;
