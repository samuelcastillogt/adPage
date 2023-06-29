import AdsFiltered from '@/app/components/AdsFiltered';
import GenericLinkButton from '@/app/components/GenericLinkButton';
import UpButton from '@/app/components/UpButton';
import { serviceData } from '@/services/data.service';
import Link from 'next/link';
import React from 'react';

const page = async({params}) => {
    const {slug} = params
    const data = await serviceData.getAdsBySubCat(slug.replace("%20", " "))
    return (
      <div>
       
        
        <div className="flex justify-center w-full">
<AdsFiltered data={data} subCategoria={slug.replace("%20", " ")}/>
        </div>

      </div>
    );
};

export default page;