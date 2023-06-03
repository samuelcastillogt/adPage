import React from 'react';
import Image from 'next/image';
import { serviceData } from '@/services/data.service';
import ButtonsAds from '@/app/components/ButtonsAds';
import Map from '@/app/components/Map';
const page = async({params}) => {
    console.log(params)
    const {data, id} = await serviceData.getAdData(params.slug);

    return (
        <div className='m-5'>
            <div className="flex flex-wrap justify-around ">
               <img
      src="https://slp-statics.astockcdn.net/static_assets/staging/23winter/home/curated-collections/Card6_564766791.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />

        <Map />
  
            </div>
           <ButtonsAds /> 
            <div className="m-5">
              <p className='text-2xl font-bold'>{data.titulo}</p>
            <p>{data.descripcion}</p>
            <p>Q. {data.precio}</p>  
            </div>
            
        </div>
        
    );
};

export default page;