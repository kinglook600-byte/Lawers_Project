// import card from "../../../../DataBase/card"
import BlockCard from "../../../UI/Cards/BlockCard/BlockCard";
import type { ICardBlock } from "../../../UI/Cards/BlockCard/lib/types/typeCardBlock";
import { useTranslation } from 'react-i18next'
import {useState, useEffect} from "react"

const HomeServiceSection = () => {
  const { t } = useTranslation()


  
     const [gets, setGets] = useState<ICardBlock[]>([])
  
     const DATA_BASE = "https://jsonplaceholder.typicode.com/posts"
  
  
     useEffect(() => {
      const fetchApi = async () => {
        try {
          const response = await fetch(DATA_BASE)
          const get = await response.json()
          const filterPosts = get.filter((i: { id: number }) => i.id < 7)
          setGets(filterPosts)
        } catch(e) {
          console.log("Not found",e)
        }
      }
      fetchApi()
     },[])
  
  return (
    <section>
    <div className="flex flex-col items-center gap-5">
        <div>
          <h2 className="text-[18px] font-bold border-b-4 p-3 border-blue-500 sm:text-[25px] 2xl:text-3xl 2xl:border-b-4">
            {t('Our_Service')}
          </h2>
        </div>

        <div className="text-center my-5 mx-10 text-[10px] sm:text-[16px] md:mx-20 2xl:w-230">
          <p>
            {t('textBlockCard')}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
        {gets.map((item_card, i) => (
          <BlockCard key={i} cards={item_card} />
        ))}
      </div>
    </section>
  );
}

export default HomeServiceSection

