import ComentatersCard from "../../../UI/Cards/ComentatersCard/ComentatersCard";
import comentaters from "../../../../DataBase/comenters";
import { useTranslation } from 'react-i18next'

const HomeCommentatersCardSection = () => {
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
        {comentaters.map((comments, i) => (
          <ComentatersCard key={i} comments={comments} />
        ))}
      </div>
    </div>
  );
};

export default HomeCommentatersCardSection;
