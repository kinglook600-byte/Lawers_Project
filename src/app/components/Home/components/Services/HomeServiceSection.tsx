import card from "../../../../DataBase/card"
import BlockCard from "../../../UI/Cards/BlockCard/BlockCard";

const HomeServiceSection = () => {
  return (
    <section>
    <div className="flex flex-col items-center gap-5">
        <div>
          <h2 className="text-[18px] font-bold border-b-4 p-3 border-blue-500 sm:text-[25px] 2xl:text-3xl 2xl:border-b-4">
            Наши услуги
          </h2>
        </div>

        <div className="text-center my-5 mx-10 text-[10px] sm:text-[16px] md:mx-20 2xl:w-230">
          <p>
            Давно выяснено, что при оценке дизайна и композиции читаемый текст
            мешает сосредоточиться. Lorem Ipsum используют потому, что тот
            обеспечивает более или менее стандартное заполнение шаблона
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
        {card.map((item_card) => (
          <BlockCard key={item_card.id} cards={item_card} />
        ))}
      </div>
    </section>
  );
}

export default HomeServiceSection

// Changed a file