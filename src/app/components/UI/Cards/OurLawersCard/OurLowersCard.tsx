import type { Lawersform } from "./lib/types/typeOurLawers" 
import { useTranslation } from 'react-i18next'

const OurLowers = (lawers: Lawersform) => {
    const { t } = useTranslation()
  

  return (
      <div className="flex flex-col items-center shadow-md p-2 gap-5 md: mx-10 sm:grid-cols-2">
        <div>
            <h1 className="text-center">{t(lawers.lawers.name)}</h1>
            <h2>{lawers.lawers.username}</h2>
            <p className="text-center">{t(lawers.lawers.email)}</p>
        </div>
      </div>
  )
}

export default OurLowers
