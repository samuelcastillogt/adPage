"use client"
import React, { useState } from 'react';
import { departamentos } from '@/utils/departamentosGt';
const DepartamentosFilter = () => {
    const [filter, setFilter] = useState("Todo el pais")
    return (
        <div className="grid grid-rows-4 grid-flow-col gap-4 m-5">
            <div className=''>
                <input type="checkbox" id="cbox2" name = "preg3" value="Todo el Pais" /> <label>Todo el pais</label>
                </div>
            {
                departamentos.map((item)=> <div key={item}>
                <input type="checkbox" id="cbox2" name = "preg3" value={item} /> <label>{item}</label>
                </div>)
            }
        </div>
    );
};

export default DepartamentosFilter;