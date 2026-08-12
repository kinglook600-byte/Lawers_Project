
import type { ICard } from "./lib/types/typeCardBlock";
import { useTranslation } from 'react-i18next'


function Card(cards: ICard) {
   const { t } = useTranslation()



  return (
      <div>
        <div className="p-2 mx-15 w-fit lg:mx-20 flex justify-center lg:p-6 items-center flex-col shadow-md sm:mx-25 2xl:gap-4 2xl:h-80"> 
          <img src={cards.cards.icon} alt="" className="my-4" />
          <h2 className="text-[16px] text-center w-fit sm:text-[23px] md:text-[20px] 2xl:text-[20px] my-4">{t(cards.cards.title)}</h2>
          <p className="text-[13px] sm:text-[15px] text-center my-4 2xl:text-[18px]">
          {t(cards.cards.text)}
          </p>
      </div>
      </div>
  );
}

export default Card