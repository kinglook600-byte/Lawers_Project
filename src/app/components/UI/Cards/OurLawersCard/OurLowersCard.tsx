import type { Lawersform } from "./lib/types/typeOurLawers" 


const OurLowers = (lawers: Lawersform) => {
  return (
      <div className="flex flex-col items-center shadow-md p-2 gap-5 md: mx-10 sm:grid-cols-2">
        <img src={lawers.lawers.image} className="sm:w-100 md:w-100  " alt="" />
        <div>
            <h1 className="text-center">{lawers.lawers.name}</h1>
            <p className="text-center">{lawers.lawers.info}</p>
        </div>
      </div>
  )
}

export default OurLowers
