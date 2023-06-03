'use client'
import React from 'react';
import {serviceData} from "../../services/data.service"
const SearchBig = () => {
    const valores = ["Carros", "Casas", ]
    const getData = ()=>{
        serviceData.saveAdData({
            name: "este",
  state: "CA",
  country: "USA"
        })
    }
    return (
        <div className='p-5 w-full flex flex-nowrap justify-center items-center'>
            <input type="text" name="" id="" className='rounded-lg border border-yellow-700 w-80 focus:border-blue-400'/>
            <button className='bg-[#FEAE00] w-32 h-12  rounded-full' onClick={getData}>Buscar</button>
        </div>
    );
};

export default SearchBig;