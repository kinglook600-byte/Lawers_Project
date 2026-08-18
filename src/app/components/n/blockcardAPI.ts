import type { ICardBlock } from "../UI/Cards/BlockCard/lib/types/typeCardBlock";

export const fetchCards = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: ICardBlock[] = await response.json();
  return data.filter((item) => item.id < 7);
};