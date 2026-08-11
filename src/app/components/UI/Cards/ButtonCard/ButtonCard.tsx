import { useTranslation } from 'react-i18next'


const Button = () => {
  const { t } = useTranslation()
  return (
    <div>
         <button className="w-40 bg-blue-500 mx-5 rounded-[5px] sm:mx-13 md:mx-23 lg:bg-blue-500 animate-bounce my-10 p-4 lg:w-50 text-white 2xl: py-3 2xl:rounded-lg 2xl:mx-25 2xl:mt-10 ">
          {t('key25', 'Все новости')}
        </button>
    </div>
  )
}

export default Button
