import type {IComentatersform} from "./lib/types/typeComentatersCard"

const Comentaters = (comments: IComentatersform) => {
  return (
    <div className="w-fit mx-5 sm:mx-10 lg:w-190 lg:mx-20">
      <div className="flex justify-between gap-2">
        <div className="flex">
        <img src={comments.comments.image} className="w-10 h-13 sm:w-15 sm:h-17 lg:w-20 lg:h-20" alt="" />
          <div className="flex flex-col mx-4">
            <p className="text-[10px] lg:text-[15px]">{comments.comments.job}</p>
            <h1 className="text-[14px] lg:text-[20px] md:text-[22px]">{comments.comments.name}</h1>
          </div>
      </div>
      <div>
        <img src={comments.comments.icon} className="w-8 h-10 lg:w-10 lg:h-10" alt="" />
      </div>
      </div>
      <p className="p-2 text-[14px] lg:text-[15px] md:text-[17px]">
        {comments.comments.comment}
      </p>
    </div>
  )
}

export default Comentaters