import { useTranslation } from 'react-i18next'
const Footer = () => {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-black py-10 px-4">
      <div className="mx-2 xl:flex items-center xl:justify-between border-b-2 border-gray-700 p-4 xl:mx-10 gap-10 my-4">
        <div>
          <h2 className="text-2xl text-blue-500">
            {t('Humanrightsdefender')}
          </h2>
          <p className="text-white font-bold my-3 text-[20px]">
            {t('Lawfirm')}
          </p>
        </div>

        <div className="hidden lg:block w-210">
          <a href='#contacts' className="hidden lg:block text-white text-base leading-7">
            {t('footerText')}
          </a>
        </div>
      </div>
      <div className="mx-1 lg:flex justify-between items-center lg:gap-40 lg:mx-10 xl:justify-between xl:mt-10 xl:gap-70 p-3 2xl:gap-90">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <img
              src="public/icon/map.png"
              alt="map"
              className="w-8 h-8"
            />

            <div>
              <p className="text-white text-[13px] lg:text-[13px]">
                {t('key14')}
              </p>

              <h2 className="text-white text-[13px] lg:text-base">
                {t('40', 'г. Одинцово, пр. Будапештсткая, 40')}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="public/icon/whitephone.png"
              alt="phone"
              className="w-8 h-8"
            />

            <div>
              <p className="text-white text-[10px] lg:text-[13px]">
                {t('MemoryCamera')}
              </p>

              <h2 className="text-white text-base lg:text-[13px]">
                {t('79220229482', '+7 (922) 022-94-82')}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img
              src="public/icon/mail.png"
              alt="mail"
              className="w-8 h-8"
            />

            <div>
              <p className="text-white text-sm lg:text-[13px]">
                {t('correspondence')}
              </p>

              <h2 className="text-white text-base lg:text-[13px]">
                janis62@yahoo.com
              </h2>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-white lg:text-[13px] 2xl:hover:text-blue-600">
                {t('services')}
              </a>
            </li>

            <li>
              <a href="#" className="text-white lg:text-[13px] hover:text-blue-600 transition">
                {t('AboutFirm')}
              </a>
            </li>

            <li>
              <a href="#" className="text-white lg:text-[13px] hover:text-blue-600 transition">
                {t('key17')}
              </a>
            </li>

            <li>
              <a href="#" className="text-white lg:text-[13px] hover:text-blue-600 transition">
                {t('reviews')}
              </a>
            </li>

            <li>
              <a href="#" className="text-white lg:text-[13px] hover:text-blue-600 transition">
                {t('importantMaterial')}
              </a>
            </li>

            <li>
              <a href="#" className="text-white lg:text-[13px] hover:text-blue-600 transition">
                {t('charity')}
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full my-10">
          <div className="flex items-center gap-4">
            <img
              className="rounded-full w-16 h-16"
              src="public/image/lawer_img.png"
              alt={t('Mironov')}
            />

            <div>
              <h2 className="text-white font-bold text-lg">
                {t('Alex')}
              </h2>

              <p className="text-gray-400 text-sm">
                {t('Lead')}
              </p>
            </div>
          </div>

          <p className="text-white hidden lg:block my-2 text-[10px] w-75">
            {t('textAlex')}
          </p>

          <button className="bg-blue-600 text-white w-40 p-2 text-[14px] lg:px-6 py-3 my-5 rounded-lg lg:w-60">
            {t('askQuestion')}
          </button>
        </div>
      </div>
      <div className="border-t border-gray-600 mx-1 lg:mt-10 pt-6 my-5 lg:mx-10">
        <div className="flex flex-col">
          <p className="text-white text-sm">
            {t('allRights')}
          </p>

          <p className="text-white text-sm">
            {t('Politics')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;