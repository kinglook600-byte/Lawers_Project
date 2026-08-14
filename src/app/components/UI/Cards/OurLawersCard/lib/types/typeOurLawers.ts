export interface ILawers {
  id?: number
  image: string
  firstName: string
  lastName: string
  birthDate: string
}

export interface Lawersform {
  lawers: ILawers;
}