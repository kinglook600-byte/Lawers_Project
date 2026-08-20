
import { useEffect, useState } from "react";
import type { ICard } from "./lib/types/typeCardBlock";
import { useTranslation } from 'react-i18next'
// import { useState, useEffect } from "react" 

import { apiAll } from "../../../../api/client";
import { API_ALL } from "../../../../api/client";

interface IUserImages {
  id: number
  image: string
}

function Card(cards: ICard) {
   const { t } = useTranslation()
   const [fetchImages, setFetchIMages] = useState<IUserImages[]>([])

   useEffect(() => {
    const fetchImagesLawyer = async () => {
      try {
        const res = await apiAll.get(`${API_ALL}/photos`, {params:{_limit: 4}})
        setFetchIMages(res.data)
        console.log(res.data)
      } catch(e) {
        console.log("Not found", e)
      }
    }
    fetchImagesLawyer()
   },[])

  return (
      <div>
         <div className="p-2 mx-15 w-fit lg:mx-20 flex justify-center lg:p-6 items-center flex-col shadow-md sm:mx-25 2xl:gap-4 2xl:h-80"> 
        <h2 className="text-[16px] text-center w-fit sm:text-[23px] md:text-[20px] 2xl:text-[20px] my-4">
          {fetchImages.map((img, i) => (
            <div key={i}>
              <img src={img.image} alt="" />
            </div>
          ))}
          {t(cards.cards.title)}
        </h2>
        <p className="text-[13px] sm:text-[15px] text-center my-4 2xl:text-[18px]">
          {t(cards.cards.body)}
        </p>
      </div>
      </div>
  );
}

export default Card