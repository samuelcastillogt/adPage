import React from 'react';
import Header from './components/Header';
import SliderFull from './components/SliderFull';
import SearchBig from './components/SearchBig';
import DepartamentosFilter from './components/DepartamentosFilter';
import Footer from './components/Footer';
import PremiumAdsCarrusel from './components/PremiumAdsCarrusel';
// import AdsListHome from './components/adsListHome';
import { serviceData } from '@/services/data.service';
import { authService } from '@/services/auth.service';
import { getAuth } from "firebase/auth";
const auth = getAuth();
const index = async() => {
  const adsData = await serviceData.getAllAds()
  const user = auth.currentUser;
  return (
    <>
      <SliderFull />
      <div className="bg-black h-24 flex justify-center items-center m-5">
        <p className='text-[#FEAE00]'>Busqueda por lugar  (Selecciona uno) </p>
      </div>
      <DepartamentosFilter />
      <PremiumAdsCarrusel />
      {/* <AdsListHome /> */}
    </>
  );
};

export default index;