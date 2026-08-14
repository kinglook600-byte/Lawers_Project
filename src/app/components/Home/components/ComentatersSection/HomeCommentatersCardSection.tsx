import ComentatersCard from "../../../UI/Cards/ComentatersCard/ComentatersCard";
import type {IFormCommenters } from "./../../../UI/Cards/ComentatersCard/lib/types/typeComentatersCard"
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from "react";

const HomeCommentatersCardSection = () => {
  const [gets, setGets] = useState<IFormCommenters[]>([])

  useEffect(() => {
    const getsFetch = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts")
        const getResponse = await response.json()
        const commenterFilter = getResponse.posts.filter(( i:{id: number}) => i.id < 3)
        setGets(commenterFilter)
      } catch(e) {
        console.error ("Not found", e)
      }
    }
    getsFetch()
  },[])

  const { t } = useTranslation()
  return (
    <div>
      <div className="mx-2 lg:mx-10 2xl:mx-27">
        <div className="flex justify-center items-center flex-col mb-10 2xl:justify-between">
          <h2 className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[20px]  2xl:text-[25px]">
            {t('whatSaysAboutUs')}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:flex justify-center items-center gap-3">
        {gets.map((comments, i) => (
          <ComentatersCard key={i} comments={comments} />
        ))}
      </div>
    </div>
  );
};

export default HomeCommentatersCardSection;
