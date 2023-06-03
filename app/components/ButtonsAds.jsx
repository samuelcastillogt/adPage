"use client"
import React, { useState } from 'react';
import {AiOutlineFlag, AiFillFlag,AiFillStar, AiOutlineStar, AiOutlineStarFill} from "react-icons/ai"
import {AiOutlineShareAlt} from "react-icons/ai"
const ButtonsAds = () => {
    const [report, setReport] = useState(false)
    const [fav, setFav] = useState(false)
    const reportAd = ()=>{
        setReport(!report)
    }
    const favAd = ()=>{
        setFav(!fav)
    }
    return (
        <div className="flex flex-nowarp justify-around items-center w-1/2">
        <button className='bg-[#FEAE00] p-3 rounded-full m-2 text-center '>Responder</button>
        {
            report ? <AiFillFlag size={30} onClick={reportAd} className='cursor-pointer text-red-600'/> : <AiOutlineFlag size={30} onClick={reportAd} className='cursor-pointer'/>
        }
        {
            fav ? <AiFillStar size={30} onClick={favAd} className='cursor-pointer text-yellow-400'/> : <AiOutlineStar size={30} onClick={favAd} className='cursor-pointer'/>
        }
        
        <AiOutlineShareAlt size={30} className='cursor-pointer'/>
    </div>
    );

};

export default ButtonsAds;