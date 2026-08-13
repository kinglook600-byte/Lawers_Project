export interface ICardBlock  {
  id: number;
  image: string
  title: string;
  body: string;
}

export interface ICard {
  cards: ICardBlock;
}
