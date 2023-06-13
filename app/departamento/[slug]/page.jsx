import { serviceData } from '@/services/data.service';
import React from 'react';

const page = async({params}) => {
    const {slug} = params
    const frist = slug.charAt(0).toUpperCase() + slug.slice(1)
    const ads = await serviceData.getAdsByDept(frist)
    console.log(ads, frist)
    return (
        <div>
           este es el departamento 
        </div>
    );
};

export default page;