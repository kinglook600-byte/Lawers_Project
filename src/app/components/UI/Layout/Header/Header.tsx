import { useState } from "react";
import { useTranslation } from 'react-i18next'
const Header = () => {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru"
    i18n.changeLanguage(newLanguage)
  }

  return (
    <header className="min-h-screen bg-[url('public/image/header_back.png')] bg-cover bg-center">
      <div className="bg-black/90 min-h-screen opacity-90 2xl:opacity-80">
        <div className="flex justify-between items-center sm:px-4 2xl:mx-27">
          <div className="flex items-center gap-2 my-3 sm:gap-5 2xl:my-10">
            <div>
              <button onClick={handleLanguage} className="text-white font-bold ">{t("buttonChangeLanguage")}</button>
            </div>
            <div className="my-5 ml-5 flex items-center mx-3 gap-3 sm:mx-6 2xl:gap-2">
              <img src="public/icon/phone.png" alt="" />
              <p className= " text-white text-[14px] sm:text-[20px] md:text-[23px] 2xl:text-sm 2xl:text-[20px]">
                {t('79220229482', '+7 (922) 022-94-82')}
              </p>
            </div>

            <div className="flex gap-3">
              <img src="/icon/mail.png" alt="" className="hidden lg:block" />
              <p className="text-white text-[8px] hidden lg:block md:text-[25px] 2xl:text-[18px]">janis62@yahoo.com</p>
            </div>
          </div>

          <a
             href="#"
            className="mr-5 text-blue-400 animate-bounce shadow-md text-[10px] font-bold sm:text-[20px] "
          >
            {t('order', 'Заказать звонок')}
          </a>
        </div>

 
        <div className="flex mx-2 justify-between items-center my-5 sm:mx-9 2xl:px-4 2xl:mx-24">
          <div>
            <h2 className="ml-3 text-blue-500 text-[12px] tracking-[4px] font-bold uppercase sm:text-[18px] lg:text-[24px]">
              {t('key2', 'Правозащитник')}
            </h2>

            <p className="ml-3 mt-2 text-white font-bold text-sm text-[13px] sm:text-[15px] lg:text-[20px] 2xl:text-[16px]">
              {t('key3', 'Юридическая компания')}
            </p>
          </div>

        
          <nav className="hidden 2xl:block xl:ml-130 2xl: ml-210">
            <ul className="flex items-center gap-5">
              <li>
                <a className=" text-[20px] text-white 2xl:text-[16px] hover:text-blue-500 transition" href="#">
                  {t('key4', 'Услуги')}
                </a>
              </li>

              <li>
                <a className=" text-white text-[20px] 2xl:text-[16px] hover:text-blue-500 transition duration-100" href="#">
                  {t('key5', 'О компании')}
                </a>
              </li>

              <li>
                <a className=" text-white text-[20px] 2xl:text-[16px] hover:text-blue-500 transition" href="#">
                  {t('key6', 'Юристы')}
                </a>
              </li>

              <li>
                <a className=" text-white text-[20px] 2xl:text-[16px] hover:text-blue-500 transition" href="#">
                  {t('key7', 'Отзывы')}
                </a>
              </li>

              <li>
                <a className=" text-white text-[20px] 2xl:text-[16px] hover:text-blue-500 transition" href="#">
                  {t('key8', 'Новости')}
                </a>
              </li>

              <li>
                <a className=" text-white text-[20px] 2xl:text-[16px] hover:text-blue-500 transition" href="#">
                  {t('key9', 'Контакты')}
                </a>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src="public/icon/burgermenu.png" alt={t('burgerMenu', 'Burger Menu')} className="w-7 mr-5 sm:w-8 2xl:hidden" />
          </button>
        </div>
        {isOpen && (
          <nav className=" bg-black p-10 2xl:hidden">
            <ul className="flex justify-end items-end flex-col gap-5">
              <li>
                <a className=" text-white hover:text-blue-500 lg:text-[25px]" href="#">
                  {t('key4', 'Услуги')}
                </a>
              </li>

              <li>
                <a className=" text-white hover:text-blue-500 lg:text-[25px]" href="#">
                  {t('key5', 'О компании')}
                </a>
              </li>

              <li>
                <a className=" text-white hover:text-blue-500 lg:text-[25px]" href="#">
                  {t('key6', 'Юристы')}
                </a>
              </li>

              <li>
                <a className=" text-white hover:text-blue-500 lg:text-[25px]" href="#">
                  {t('key7', 'Отзывы')}
                </a>
              </li>

              <li>
                <a className=" text-white hover:text-blue-500 lg:text-[25px]" href="#">
                  {t('key8', 'Новости')}
                </a>
              </li>

              <li>
                <a className=" text-white hover:text-blue-500 lg:text-[25px]" href="#">
                  {t('key9', 'Контакты')}
                </a>
              </li>
            </ul>
          </nav>
        )}
        <div className="flex flex-col justify-center items-center text-center min-h-[55vh] my-10 2xl:min-h-[65vh] 2xl:px-4">
          <h2 className="text-[18px] text-white uppercase sm:text-[25px] md:text-[24px] tracking-[4px] 2xl:text-[35px]">
            {t('key10', 'Оказываем весь комплекс')}
          </h2>

          <h1 className="text-blue-500 text-[17px] tracking-[2px] sm:tracking-[6px] sm:text-[34px] md:tracking-[10px] 2xl:text-[90px] 2xl:tracking-[5px]">
            {t('key11', 'Юридических услуг')}
          </h1>

          <div className="max-w-xl">
            <p className="text-white text-[14px] my-10 mx-10 text-center sm:text-[20px] md:text-[25px] lg:text-[25px] md:mx-5 2xl:text-center">
              {t('loremIpsum', 'Давно выяснено, что при оценке дизайна и композиции читаемый текст\r\n              мешает сосредоточиться. Lorem Ipsum используют потому, что тот\r\n              обеспечивает более или менее стандартное заполнение.')}
            </p>
          </div>

          <button className="bg-white hover:bg-blue-600 p-3 rounded-xs animate-pulse hover:text-white transition duration-1000">
            {t('key12', 'Наши услуги')}
          </button>
        </div>

        <div className="hidden md:flex my-10 mx-12 justify-between items-center 2xl:mx-30">
          <img
            src="public/icon/bullet_navigation.png"
            alt=""
          />

          <img
            src="public/icon/button_slider.png"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}; 
// const HeaderTranslation = withTranslation()(Header)

export default Header;