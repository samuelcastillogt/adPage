"use client"
import React, { useState } from 'react';
import { departamentos } from '@/utils/departamentosGt';
import { useDispatch } from 'react-redux';
import {SET_DEPT} from "../../redux/departamento.slice"
const DepartamentosFilter = () => {
    const [filter, setFilter] = useState("Todo el pais")
    const dispatch=useDispatch()
        return (
        <div className="flex justify-center items-center m-5">
            <div className=''>
                <select name="" id="" placeholder='Selecciona uno' onChange={(e)=> dispatch(SET_DEPT(e.currentTarget.value))} className='p-5 border rounded text-lg '>
                <option value="">Todo el Pais</option>
                {
                departamentos.map((item)=> <option key={item} value={item}>{item}</option>)
            }
                </select>
                {/* <input type="checkbox" id="cbox2" name = "preg3" value="Todo el Pais" /> <label>Todo el pais</label>
                </div>
            {
                departamentos.map((item)=> <div key={item}>
                <input type="checkbox" id="cbox2" name = "preg3" value={item} /> <label>{item}</label>
                )
            } */}
        </div></div>
    );
};

export default DepartamentosFilter;