import type { Lawersform } from "./lib/types/typeOurLawers" 
import { useTranslation } from 'react-i18next'


const OurLowers = (lawers: Lawersform) => {
    const { t } = useTranslation()
  return (
      <div className="flex flex-col items-center shadow-md p-2 gap-5 md: mx-10 sm:grid-cols-2">
        <img src={lawers.lawers.image} className="sm:w-100 md:w-100  " alt="" />
        <div>
            <h1 className="text-center">{t(lawers.lawers.info)}</h1>
            <p className="text-center">{t(lawers.lawers.info)}</p>
        </div>
      </div>
  )
}

export default OurLowers
