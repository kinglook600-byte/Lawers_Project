import ComentatersCard from "../../../UI/Cards/ComentatersCard/ComentatersCard";
import type {IFormCommenters } from "./../../../UI/Cards/ComentatersCard/lib/types/typeComentatersCard"
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from "react";
// import { API_COMMENTS } from "../../../../config";
import { apiAll } from "./../../../../api/client"
// import { Api_comment } from "./../../../../api/client"; 
import { API_ALL } from "../../../../api/client";
 
const HomeCommentatersCardSection = () => {
  const [getsComment, setGetsComment] = useState<IFormCommenters[]>([])
   const { t } = useTranslation()

   useEffect(() => {
    const fetchCommentApi = async () => {
      try {
        const res = await apiAll.get(`${API_ALL}/comments`, {params:{_limit:2}})
        setGetsComment(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCommentApi()
    }, [])  

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
        {getsComment.map((comments, i) => (
          <ComentatersCard key={i} comments={comments} />
        ))}
      </div>
    </div>
  )
};

export default HomeCommentatersCardSection;
