
import type { ICard } from "./lib/types/typeCardBlock";
// import { useTranslation } from 'react-i18next'
import { useState, useEffect } from "react" 

function Card(cards: ICard) {
  //  const { t } = useTranslation()

   interface Props {
    id: number
    title: string
    body: string
   }
   const [post, setPost] = useState<Props[]>()

   const DATA_BASE = "https://jsonplaceholder.typicode.com/posts"


   useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(DATA_BASE)
        const post = await response.json()
        setPost(post)
      } catch(e) {
        console.log("Not found",e)
      }
    }
    fetchApi()
   },[])


  return (
      <div>
        <div className="p-2 mx-15 w-fit lg:mx-20 flex justify-center lg:p-6 items-center flex-col shadow-md sm:mx-25 2xl:gap-4 2xl:h-80"> 
          <img src={cards.cards.icon} alt="" className="my-4" />
          {post && post.length > 0 && (
              <h2 className="text-[16px] text-center w-fit sm:text-[23px] md:text-[20px] 2xl:text-[20px] my-4">{post[0].title}</h2>
          )}
          <p className="text-[13px] sm:text-[15px] text-center my-4 2xl:text-[18px]">
          
          </p>
      </div>
      </div>
  );
}

export default Card