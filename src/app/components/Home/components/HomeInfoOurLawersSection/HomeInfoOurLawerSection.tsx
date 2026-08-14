import HomeInfoOurLowers from "../../../UI/Cards/OurLawersCard/OurLowersCard";
import type { ILawers } from "../../../UI/Cards/OurLawersCard/lib/types/typeOurLawers";

import { useTranslation } from 'react-i18next'
import { useState, useEffect } from "react";

const HomeInfoOurLawerSection = () => {
  const { t } = useTranslation()
  const [gets, setGets] = useState<ILawers[]>([])

useEffect(() => {
  const getsFetch = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users")
      const getResponse = await response.json()
      const filterUsers = getResponse.users.filter((i: { id: number }) => i.id < 5)
      setGets(filterUsers)
      console.log(filterUsers)
    } catch (e) {
      console.error("Not found", e)
    }
  }

  getsFetch()
}, [])
  
  
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-[20px] mx-4 lg:text-3xl font-bold">{t('Our_Lawers')}</h2>
        <p className="text-[14px] text-center mx-4 mb-5 sm:text-[18px] sm:mx-10 lg:mx-20  lg:text-[22px] 2xl:max-w-3xl ">
          {t('infoLawers')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx:29 xl:flex justify-between">
        {gets.map((lawers, i) => (
        <HomeInfoOurLowers key={i} lawers={lawers}/>
      ))}
      </div>
    </div>
  );
};

export default HomeInfoOurLawerSection;
