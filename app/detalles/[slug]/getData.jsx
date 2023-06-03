
import React from 'react';
import { serviceData } from '@/services/data.service';
export async function generateStaticParams() {
    
  }
const page = () => {
    const getData = async()=>{
     const data = await serviceData.getAdData("Q8URNUh80bdgnM2JVqjy");
     console.log(data)
    return data  
    }
    getData()
    return(
        <h1>Hola</h1>
    )
};

export default page;