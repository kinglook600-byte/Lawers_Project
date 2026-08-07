export interface ILawers {
  id?: number,
  image: string,
  name: string,
  info: string
}

export interface Lawersform {
  lawers: ILawers;
}