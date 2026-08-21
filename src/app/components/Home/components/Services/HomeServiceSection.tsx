// import card from "../../../../DataBase/card"
import BlockCard from "../../../UI/Cards/BlockCard/BlockCard";
import type { ICardBlock } from "../../../UI/Cards/BlockCard/lib/types/typeCardBlock";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { getHomeBlockCards } from "../../../../lib/Home/homeRequest";

const HomeServiceSection = () => {
  const { t } = useTranslation();
  const param = 5

  const [getCards, setGetCards] = useState<ICardBlock[]>([]);

  const getAll = async () => {
    try {
      const res = await getHomeBlockCards(param);
      setGetCards(res?.data);
    } catch (error) {
      console.log("Not found", error);
    }
  };

  useEffect(() => {
    getAll();
  }, [param]);

  return (
    <section>
      <div className="flex flex-col items-center gap-5">
        <div>
          <h2 className="text-[18px] font-bold border-b-4 p-3 border-blue-500 sm:text-[25px] 2xl:text-3xl 2xl:border-b-4">
            {t("Our_Service")}
          </h2>
        </div>

        <div className="text-center my-5 mx-10 text-[10px] sm:text-[16px] md:mx-20 2xl:w-230">
          <p>{t("textBlockCard")}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
        {getCards.map((item_card, i) => (
          <BlockCard key={i} cards={item_card} />
        ))}
      </div>
    </section>
  );
};

export default HomeServiceSection;
