import HomeInfoOurLowers from "../../../UI/Cards/OurLawersCard/OurLowersCard";
import type { ILawers } from "../../../UI/Cards/OurLawersCard/lib/types/typeOurLawers";
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from "react";
// import { API_Lawyer } from "../../../../config";
// import { userRoutes } from "./../../../../api/userRoutes"
import { apiAll } from './../../../../api/client';
// import { Api_lawyer } from "./../../../../api/client";
import { API_ALL } from "../../../../api/client";


const HomeInfoOurLawerSection = () => {
  const { t } = useTranslation()
  const [getsLayers, setGetsLayers] = useState<ILawers[]>([])

   useEffect(() => {
    const getAll = async () => {
      try {
        const response = await apiAll.get(`${API_ALL}/posts`, {params: {_limit: 4}});
        setGetsLayers(response.data);
      } catch (error) {
        console.log('Error fetching all users:', error);
      }
    };
    
    getAll();
  }, []);

  
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-[20px] mx-4 lg:text-3xl font-bold">{t('Our_Lawers')}</h2>
        <p className="text-[14px] text-center mx-4 mb-5 sm:text-[18px] sm:mx-10 lg:mx-20  lg:text-[22px] 2xl:max-w-3xl ">
          {t('infoLawers')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx:29 xl:flex justify-between">
        {getsLayers.map((lawers, i) => (
        <HomeInfoOurLowers key={i} lawers={lawers}/>
      ))}
      </div>
    </div>
  );
};

export default HomeInfoOurLawerSection;
