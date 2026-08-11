import type { Icomentaters } from "./lib/types/typeImportantMaterialCard";
import { useTranslation } from 'react-i18next'




const ImportantMaterial = (commenter: Icomentaters) => {
  //  const [curr, setCurr] = useState(0);

  // const prev = () => setCurr((prevCurr) => (prevCurr === 0 ? importantmaterial.length - 1 : prevCurr - 1));
  // const next = () => setCurr((prevCurr) => (prevCurr === importantmaterial.length - 1 ? 0 : prevCurr + 1));

  const { t } = useTranslation()

  return (
    <div className="mx-2 lg:my-15 lg:ml-9 sm:mx-10 2xl:px-4 md:w-120 md:mx-50 xl:w-160 xl:mx-10">
          <div className="shadow-md w-fit lg:shadow-md lg:w-fit lg:p-5">
            <img
              src={commenter.commenter.image}
              alt=""
               className="w-130 h-70 sm:w-130 sm:h-80 lg:w-200 rounded-sm"
            />

            <div className="p-5">
              <h2 className="text-[13px] sm:text-[15px] lg:text-[17px] font-semibold md:text-[18px]">
                {t(commenter.commenter.name)}
              </h2>

              <p className="text-gray-500 text-[13px] lg:mt-2 lg:text-[16px] md:text-[19px]">{t(commenter.commenter.date)}</p>

              <p className="text-[10px] sm:text-[15px]  lg: mt-4 leading-7 md:font-bold">
                {t(commenter.commenter.text)}
              </p>
            </div>
          </div>
        </div>
  );
};

export default ImportantMaterial;