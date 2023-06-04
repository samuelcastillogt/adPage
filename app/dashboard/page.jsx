
import Link from 'next/link';
import React from 'react';
import GenericLinkButton from '../components/GenericLinkButton';
import { serviceData } from '@/services/data.service';
import UserDatabanner from '../components/UserDatabanner';
import TableAds from '../components/TableAds';

const page = async() => {
  const ads = await serviceData.getAllAds()
    return (
        <div>
          
          <div className='bg-black h-24 flex justify-end m-5 p-5'>
            <UserDatabanner />
          </div>
          <div className='m-5 flex items-center justify-center'>
             <TableAds />

        </div>
        </div>
    );
};

export default page;