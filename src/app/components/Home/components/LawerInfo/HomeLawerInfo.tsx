import { useTranslation } from 'react-i18next'
const HomeLawerInfo = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div className="mx-4 lg:mx-10 grid gap-5 sm:mx-10 2xl:mx-20 2xl:gap-10 2xl:grid-cols-2">
          <div>
            <h2 className="text-[19px] md:uppercase md:text-[25px] 2xl:text-[35px] ">
              {t('key26', 'Юридическая компани')}
            </h2>
            <span className="text-blue-500 text-[20px] sm:text-[24px]"> {t('key27', 'знак отопки\r\n              Правозащитник')}
            </span>

            <div className="text-[14px]  md:text-gray-700 md:text-[20px] my-10 ">
              <p>
                {t('loremIpsum3', 'Давно выяснено, что при оценке дизайна и композиции читаемый\r\n                текст мешает сосредоточиться. Lorem Ipsum используют потому, что\r\n                тот обеспечивает более или менее стандартное заполнение.')}
              </p>
              <br />
              <p>
                {t('loremIpsumLoremIpsum', 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не\r\n                всегда приемлемые модификации, например, юмористические вставки\r\n                или слова, которые даже отдалённо не напоминают латынь. Если вам\r\n                нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите\r\n                какой-нибудь шутки, скрытой в середине абзаца.')}
              </p>
              <br />
              <p>
                {t('loremIpsum4', 'За прошедшие годы текст Lorem Ipsum получил много версий.\r\n                Некоторые версии появились по ошибке, некоторые — намеренно\r\n                (например, юмористические варианты).')}
              </p>
            </div>
          </div>
          <aside>
            <div className="hidden lg:block">
              <img
                src="public/image/books.png"
                alt="Lawyer"
                className="hidden xl:block"
              />
            </div>
          </aside>
        </div>
      </div>

      <div className="flex mx-4 flex-col sm:mx-10 md:mx-20 lg:mx-15 gap-4">
        <button className="w-40 text-[13px] p-2 bg-blue-600 text-white lg:bg-blue-500 lg:p-3 rounded-[5px] lg:text-white">
          <a href="#">{t('key28', 'История компании')}</a>
        </button>

        <button className="w-40 text-[13px] p-2 bg-blue-600 text-white bg-gray-20 rounded-[5px] font-bold shadow-md lg:p-3 hover:bg-blue-600 hover:text-white transition duration-1000">
          <a href="#">{t('key17', 'Сертификаты')}</a>
        </button>
      </div>
    </div>
  );
};

export default HomeLawerInfo;