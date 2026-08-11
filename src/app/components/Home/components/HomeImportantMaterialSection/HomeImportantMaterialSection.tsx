
import importantMaterial from "../../../../DataBase/importantMaterial";
import ImportantMaterial from "../../../UI/Cards/ImportantMaterialCard/ImportantMaterialCard";
import { useTranslation } from 'react-i18next'
// import HomeButttonsSlider from "../HomeButtonsSlider/HomeButttonsSlider";

const HomeImportantMaterialSection = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className=" flex justify-center flex-col items-center">
        <h1 className="text-[20px] text-center 2xl:text-[30px]">
          {t('TextImportantMaterial', 'Полезные материалы')}
        </h1>

        <p className=" mt-4 mb-5 text-center mx-20 text-[16px] md:text-[20px] 2xl:max-w-4xl 2xl:mb-10 ">
          {t('TextImportant', 'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона.')}
        </p>
      </div>
      <div className="mx-3 lg:grid grid-cols-2 lg:grid-cols-2 xl:flex ">
        {importantMaterial.map((important, i) => (
          <ImportantMaterial commenter={important} key={i}/>
        ))}
      </div>
      {/* <HomeButttonsSlider/> */}
    </div>
  );
};

export default HomeImportantMaterialSection;
