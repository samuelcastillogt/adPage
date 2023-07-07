import React from 'react';
import Image from 'next/image';
import { serviceData } from '@/services/data.service';
import ButtonsAds from '@/app/components/ButtonsAds';
import Map from '@/app/components/Map';
const page = async({params}) => {
    const {data, id} = await serviceData.getAdData(params.slug);

    return (
        <div className='m-5 flex flex-col'>
            <div className="flex flex-wrap justify-around ">
               <img
      src={data.image}
      width={500}
      height={500}
      alt="Picture of the author"
    />

        <Map />
  
            </div>

           <div>
            <div className="m-5">
              <p className='text-2xl font-bold'>{data.titulo}</p>
            <p>{data.descripcion}</p>
            <p>Q. {data.precio}</p>  
            </div>
            <ButtonsAds /> 
           </div>
            
        </div>
        
    );
};

export default page;