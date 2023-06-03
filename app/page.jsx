import React from 'react';
import Header from './components/Header';
import SliderFull from './components/SliderFull';
import SearchBig from './components/SearchBig';
import DepartamentosFilter from './components/DepartamentosFilter';
import Footer from './components/Footer';

const index = () => {
  return (
    <>
      <SliderFull />
      <div className="bg-black h-24 flex justify-center items-center m-5">
        <p className='text-[#FEAE00]'>Busqueda por lugar  (Selecciona uno) </p>
      </div>
      <DepartamentosFilter />
    </>
  );
};

export default index;