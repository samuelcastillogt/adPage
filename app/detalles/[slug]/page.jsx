import React from 'react';
import { serviceData } from '@/services/data.service';
const page = async({params}) => {
    console.log(params)
    const {data, id} = await serviceData.getAdData(params.slug);
    return (
        <div>
            <p>{data.titulo}</p>
            <p>{data.descripcion}</p>
            <p>{data.precio}</p>
            {id}
        </div>
    );
};

export default page;