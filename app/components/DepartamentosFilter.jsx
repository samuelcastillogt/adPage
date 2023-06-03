"use client"
import React, { useState } from 'react';
import { departamentos } from '@/utils/departamentosGt';
const DepartamentosFilter = () => {
    const [filter, setFilter] = useState("Todo el pais")
    return (
        <div className="grid grid-rows-4 grid-flow-col gap-4 m-5">
            <div className=''>
                <input type="checkbox" id="cbox2" value="Todo el Pais" /> <label for="cbox2">Todo el pais</label>
                </div>
            {
                departamentos.map((item)=> <div>
                <input type="checkbox" id="cbox2" value={item} /> <label for="cbox2">{item}</label>
                </div>)
            }
        </div>
    );
};

export default DepartamentosFilter;