import HomeInfoOurLowers from "../../../UI/Cards/OurLawersCard/OurLowersCard";
import ourlawers from "../../../../DataBase/ourlawers";
import { useTranslation } from 'react-i18next'

const HomeInfoOurLawerSection = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-[20px] mx-4 lg:text-3xl font-bold">{t('Our_Lawers', 'Наши юристы')}</h2>
        <p className="text-[14px] text-center mx-4 mb-5 sm:text-[18px] sm:mx-10 lg:mx-20  lg:text-[22px] 2xl:max-w-3xl ">
          {t('infoLawers', 'Давно выяснено, что при оценке дизайна и композиции читаемый текст  мешает сосредоточиться. Lorem Ipsum используют потому, что тот        обеспечивает более или менее стандартное заполнение шаблона.')}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx:29 xl:flex justify-between">
        {ourlawers.map((lawers) => (
        <HomeInfoOurLowers key={lawers.id} lawers={lawers} />
      ))}
      </div>
    </div>
  );
};

export default HomeInfoOurLawerSection;
