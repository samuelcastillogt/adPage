"use client"
import React, { useState } from 'react';
import {AiOutlineLeftCircle, AiOutlineRightCircle} from "react-icons/ai"
const data = [
    {
        title: "Titulo 1"
    },
    {
        title: "Titulo 2"
    },
    {
        title: "Titulo 3"
    },
]
const SliderFull = () => {
    const [index, setIndex] = useState(0)
    const before = ()=>{
        if(index== 0){
            setIndex(data.length -1 )
        }else{
            setIndex(index -1)
        }
    }
    const next = ()=>{
        if(index == data.length -1){
            setIndex(0)
        }else{
            setIndex(index +1)
        }
    }
    return (
        <div className="h-64 bg-[url(https://placekitten.com/1400/1400)] bg-center bg-cover bg-fixed flex justify-around items-center" 
        //         style={{
        //     backgroundImage: "url(https://placekitten.com/1400/1400)",
        //     backgroundPosition: "center",
        //     backgroundSize: "cover",
        //     backgroundAttachment: "fixed",
        //     backgroundRepeat: "no-repeat"
        // }}
        >
        </div>
    );
};

export default SliderFull ;